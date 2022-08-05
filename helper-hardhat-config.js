const networkConfig = {
  default: {
    name: "hardhat",
  },
  31337: {
    name: "localhost",
    subscriptionId: "588",
    gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
    keepersUpdateInterval: "30",
    raffleEntranceFee: "100000000000000000", // 0.1 ETH
    callbackGasLimit: "500000", // 500,000 gas
  },
  4: {
    name: "rinkeby",
    subscriptionId: "588",
    gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
    keepersUpdateInterval: "30",
    raffleEntranceFee: "100000000000000000", // 0.1 ETH
    callbackGasLimit: "500000", // 500,000 gas
  },
}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6
const frontEndContractsFile = "../nextjs-nft-marketplace-moralis/constants/networkMapping.json"
const frontEndContractsFile2 =
  "../nextjs-nft-marketplace-thegraph/constants/networkMapping.json"
const frontEndAbiLocation = "../nextjs-nft-marketplace-moralis/constants/"
const frontEndAbiLocation2 = "../nextjs-nft-marketplace-thegraph/constants/"

module.exports = {
  networkConfig,
  developmentChains,
  VERIFICATION_BLOCK_CONFIRMATIONS,
  frontEndContractsFile,
  frontEndContractsFile2,
  frontEndAbiLocation,
  frontEndAbiLocation2,
}