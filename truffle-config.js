const HDWalletProvider = require('truffle-hdwallet-provider');
require("dotenv").config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC,"https://rinkeby.infura.io/v3/"+process.env.INFURA_PROJECT_SECRET);
      },
      network_id: 4,
      gasPrice: 20000000000,
      gas: 3716887
    },
  }
};
