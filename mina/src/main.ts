import { BasicTokenContract } from "./BasicTokenContract.js";

import { Mina, PrivateKey, Signature, UInt64 } from "o1js";
import dotenv from "dotenv";

const proofsEnabled = true;

dotenv.config();

const Berkeley = Mina.Network(
  "https://proxy.berkeley.minaexplorer.com/graphql"
);

Mina.setActiveInstance(Berkeley);

const transactionFee = 200_000_000;

let verificationKey: any;

if (proofsEnabled) {
  ({ verificationKey } = await BasicTokenContract.compile());
}

const zkAppPrivateKey = PrivateKey.fromBase58(
  process.env.zkAppPrivateKey as string
);

const zkAppAddress = zkAppPrivateKey.toPublicKey();

const deployerKey = PrivateKey.fromBase58(process.env.deployerKey as string);

const deployerAccount = deployerKey.toPublicKey();

const contract = new BasicTokenContract(zkAppAddress);

const mintAmount = UInt64.from(1);

const mintSignature = Signature.create(
  zkAppPrivateKey,
  mintAmount.toFields().concat(zkAppAddress.toFields())
);

const mint_txn = await Mina.transaction(
  { sender: deployerAccount, fee: transactionFee },
  () => {
    contract.mint(zkAppAddress, mintSignature);
  }
);

await mint_txn.prove();
await mint_txn.sign([deployerKey]).send();

console.log("minted");
