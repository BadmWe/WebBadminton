const MyERC1155NFT = require('../MyERC1155NFT.json')
const WebBadminton = require('../WebBadminton.json')

export function getContractInfo(chain) {
  if (chain === 22)
    return {
      contractAddress: '0x79a4fEbb7d1353ba20191Bc55E2e1cc9006E96c2',
      abi: WebBadminton.abi,
    }

  return {
    contractAddress: '0xF46FCAb2404b071ac33e5eD2095802Cecf77FB21',
    abi: MyERC1155NFT.abi,
  }
}
