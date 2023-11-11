import {
  SmartContract,
  state,
  State,
  method,
  DeployArgs,
  Permissions,
  UInt64,
  PublicKey,
  Signature,
  Field,
  MerkleWitness,
} from "o1js";

class MerkleWitness20 extends MerkleWitness(20) {}

export class BasicTokenContract extends SmartContract {
  @state(UInt64) totalAmountInCirculation = State<UInt64>();
  @state(UInt64) maxSupply = State<UInt64>();
  @state(Field) treeRoot = State<Field>();

  deploy(args?: DeployArgs) {
    super.deploy(args);

    const permissionToEdit = Permissions.proof();

    this.account.permissions.set({
      ...Permissions.default(),
      editState: permissionToEdit,
      setTokenSymbol: permissionToEdit,
      send: permissionToEdit,
      receive: permissionToEdit,
    });
  }

  @method init() {
    super.init();
    this.totalAmountInCirculation.set(UInt64.zero);
    this.maxSupply.set(UInt64.from(20));
  }

  @method initState(initialRoot: Field) {
    this.treeRoot.set(initialRoot);
  }

  @method update(
    leafWitness: MerkleWitness20,
    numberBefore: Field,
    incrementAmount: Field
  ) {
    const initialRoot = this.treeRoot.getAndAssertEquals();

    incrementAmount.assertLessThan(Field(10));

    // check the initial state matches what we expect
    const rootBefore = leafWitness.calculateRoot(numberBefore);
    rootBefore.assertEquals(initialRoot);

    // compute the root after incrementing
    const rootAfter = leafWitness.calculateRoot(
      numberBefore.add(incrementAmount)
    );

    // set the new root
    this.treeRoot.set(rootAfter);
  }

  @method mint(receiverAddress: PublicKey, adminSignature: Signature) {
    let totalAmountInCirculation =
      this.totalAmountInCirculation.getAndAssertEquals();

    totalAmountInCirculation.assertLessThanOrEqual(
      this.maxSupply.getAndAssertEquals()
    );

    let amount = UInt64.one;
    let newTotalAmountInCirculation = totalAmountInCirculation.add(amount);

    adminSignature
      .verify(
        this.address,
        amount.toFields().concat(receiverAddress.toFields())
      )
      .assertTrue();

    this.token.mint({
      address: receiverAddress,
      amount,
    });

    this.totalAmountInCirculation.set(newTotalAmountInCirculation);
  }

  @method sendTokens(
    senderAddress: PublicKey,
    receiverAddress: PublicKey,
    amount: UInt64
  ) {
    this.token.send({
      from: senderAddress,
      to: receiverAddress,
      amount,
    });
  }
}
