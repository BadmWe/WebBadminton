const { ethers } = require('hardhat')
const { expect } = require('chai')

describe('LSP8', function () {
  let nfToken
  const Id = ethers.utils.hexZeroPad(
    ethers.BigNumber.from('0').toHexString(),
    32
  )
  let bob
  let jane

  beforeEach(async () => {
    ;[bob, jane] = await ethers.getSigners()
    const nftContract = await ethers.getContractFactory('WebBadminton')
    nfToken = await nftContract.deploy('WebBadminton', 'WeB', bob.address)

    await nfToken.deployed()
  })

  it('correctly deployed', async function () {
    expect(await nfToken.balanceOf(bob.address)).to.equal(0)
    expect(await nfToken.totalSupply()).to.equal(0)
  })

  it('mint', async function () {
    await nfToken.connect(bob).mintArcsaber11()
    expect(await nfToken.balanceOf(bob.address)).to.equal(1)
    expect(await nfToken.totalSupply()).to.equal(1)
  })

  it('transfers', async function () {
    await nfToken.connect(bob).mintArcsaber11()
    await nfToken
      .connect(bob)
      .transfer(bob.address, jane.address, Id, true, '0x00')
    expect(await nfToken.balanceOf(bob.address)).to.equal(0)
    expect(await nfToken.totalSupply()).to.equal(1)
  })
})
