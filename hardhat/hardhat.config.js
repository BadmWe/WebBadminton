require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.MUMBAI_PRIVATE_KEY],
    },
    l14: {
      url: 'https://rpc.l14.lukso.network',
      accounts: [process.env.MUMBAI_PRIVATE_KEY],
      chainId: 22,
      gas: 50000000,
      gasPrice: 1000000000000,
    },
    evmos: {
      url: 'https://eth.bd.evmos.dev:8545',
      accounts: [process.env.PRIVATE_KEY],
      chainId: 9000,
    },
  },
}
