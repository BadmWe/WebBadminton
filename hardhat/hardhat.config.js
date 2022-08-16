require('@nomicfoundation/hardhat-toolbox')

const ALCHEMY_API_KEY = 'WmSjTjlKqH-UP69pveZ8zrwJljFXJChZ'
const MUMBAI_PRIVATE_KEY =
  '57cb47da57d864f5f1b0de38c7e4a2ab12ede9d8b4bd37a68966da0dcdbc7309'

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
}
