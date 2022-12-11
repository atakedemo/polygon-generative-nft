// hardhat.config.js

require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const { API_URL, PRIVATE_KEY, POLYGONSCAN_API } = process.env;

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
// etherscan以降 -> polygonscanの設定へ変更
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: "A58KNSC8N4DUZX1S8SYDMM2AJUWE9CXHM6"
    },
  },
};
