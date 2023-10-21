import { BasicTokenContract } from "./BasicTokenContract.js";
import {
  Mina,
  PrivateKey,
  AccountUpdate,
  UInt64,
  Signature,
  MerkleMap,
  MerkleWitness,
  MerkleTree,
  Field,
} from "o1js";

const proofsEnabled = false;

const Local = Mina.LocalBlockchain({
  proofsEnabled,
});

Mina.setActiveInstance(Local);

const deployerAccount = Local.testAccounts[0].privateKey;

console.log("deployerAccount: " + deployerAccount.toPublicKey().toBase58());

const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();

console.log("zkAppAddress: " + zkAppAddress.toBase58());

let verificationKey: any;

if (proofsEnabled) {
  ({ verificationKey } = await BasicTokenContract.compile());
}

console.log("compiled");

const contract = new BasicTokenContract(zkAppAddress);

const deploy_txn = await Mina.transaction(deployerAccount.toPublicKey(), () => {
  AccountUpdate.fundNewAccount(deployerAccount.toPublicKey());

  contract.deploy({ verificationKey, zkappKey: zkAppPrivateKey });
});

await deploy_txn.prove();

await deploy_txn.sign([deployerAccount]).send();

console.log("deployed");

console.log("minting...");

const mintAmount = UInt64.from(1);

const mintSignature = Signature.create(
  zkAppPrivateKey,
  mintAmount.toFields().concat(zkAppAddress.toFields())
);

const mint_txn = await Mina.transaction(deployerAccount.toPublicKey(), () => {
  AccountUpdate.fundNewAccount(deployerAccount.toPublicKey());
  contract.mint(zkAppAddress, mintSignature);
});

await mint_txn.prove();
await mint_txn.sign([deployerAccount]).send();

console.log("minted");

console.log(
  "totalAmountInCirculation: " + contract.totalAmountInCirculation.get()
);

console.log(
  "zkapp tokens:",
  Mina.getBalance(zkAppAddress, contract.token.id).value.toBigInt()
);

// ----------------------------------------------------

console.log("sending...");

const sendAmount = UInt64.from(1);

const send_txn = await Mina.transaction(deployerAccount.toPublicKey(), () => {
  AccountUpdate.fundNewAccount(deployerAccount.toPublicKey());
  contract.sendTokens(zkAppAddress, deployerAccount.toPublicKey(), sendAmount);
});
await send_txn.prove();
await send_txn.sign([deployerAccount, zkAppPrivateKey]).send();

console.log("sent");

// ----------------------------------------------------

console.log(
  "deployer tokens:",
  Mina.getBalance(
    deployerAccount.toPublicKey(),
    contract.token.id
  ).value.toBigInt()
);

console.log(
  "zkapp tokens:",
  Mina.getBalance(zkAppAddress, contract.token.id).value.toBigInt()
);

// create a new tree
const height = 20;
const tree = new MerkleTree(height);
class MerkleWitness20 extends MerkleWitness(height) {}

console.log(tree.getRoot());

// init root the smart contract
const root_txn = await Mina.transaction(deployerAccount.toPublicKey(), () => {
  // get the root of the new tree to use as the initial tree root
  contract.initState(tree.getRoot());
});

await root_txn.prove();

await root_txn.sign([deployerAccount, zkAppPrivateKey]).send();

console.log("tree root: " + contract.treeRoot.get());

// ----------------------------------------------------

const incrementIndex = 1n;
const incrementAmount = Field(9);

// get the witness for the current tree
const witness = new MerkleWitness20(tree.getWitness(incrementIndex));

// update the leaf locally
tree.setLeaf(incrementIndex, incrementAmount);

console.log("should it return leafCount?");

console.log(tree.getNode(0, 1n).value);
console.log(tree.getNode(0, 1n).value[0]);
console.log(tree.getNode(0, 1n).value[1]);

// update the smart contract
const txn1 = await Mina.transaction(deployerAccount.toPublicKey(), () => {
  contract.update(
    witness,
    Field(0), // leafs in new trees start at a state of 0
    incrementAmount
  );
});

await txn1.prove();
await txn1.sign([deployerAccount, zkAppPrivateKey]).send();

// compare the root of the smart contract tree to our local tree
console.log(
  `BasicMerkleTree: local tree root hash after send1: ${tree.getRoot()}`
);
console.log(
  `BasicMerkleTree: smart contract root hash after send1: ${contract.treeRoot.get()}`
);

console.log("--------------------------------------");
