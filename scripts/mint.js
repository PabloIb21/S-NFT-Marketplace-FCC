const { ethers, network } = require("hardhat");
const { moveBlocks } = require("../utils/move-blocks");

async function mint() {
  const basicNft = await ethers.getContract("BasicNft");
  console.log("Minting...");
  const mintTx = await basicNft.mintNft();
  const mintTxReceipt = await mintTx.wait(1);
  console.log(
    `Minted tokenId ${mintTxReceipt.events[0].args.tokenId.toString()} from contract: ${
      basicNft.address
    }`
  );

  if (network.config.chainId == "31337") {
    await moveBlocks(1, (sleepAmount = 1000));
  }
}

mint()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  });