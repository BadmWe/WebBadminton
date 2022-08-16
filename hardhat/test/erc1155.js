const { expect } = require('chai')

describe('Token contract', function () {
  it('Should mint Rock', async function () {
    const accounts = await ethers.getSigners()

    const TinyVillage = await ethers.getContractFactory('MyERC1155NFT')
    const tinyVillage = await TinyVillage.deploy()

    await tinyVillage.mintRock()
    const balance = await tinyVillage.balanceOf(accounts[0].address, 1)
    expect(1).to.equal(Number(balance.toString()))
  })
  it('Should mint 2 paper', async function () {
    const accounts = await ethers.getSigners()

    const TinyVillage = await ethers.getContractFactory('MyERC1155NFT')
    const tinyVillage = await TinyVillage.deploy()

    await tinyVillage.mintPaper()
    await tinyVillage.mintPaper()
    const balance = await tinyVillage.balanceOf(accounts[0].address, 2)
    expect(2).to.equal(Number(balance.toString()))
  })
  it('Should mint scissors', async function () {
    const accounts = await ethers.getSigners()

    const TinyVillage = await ethers.getContractFactory('MyERC1155NFT')
    const tinyVillage = await TinyVillage.deploy()

    await tinyVillage.mintScissors()
    const balance = await tinyVillage.balanceOf(accounts[0].address, 3)
    expect(1).to.equal(Number(balance.toString()))
  })
})
