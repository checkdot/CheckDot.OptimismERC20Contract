const HDWalletProvider = require('@truffle/hdwallet-provider');
var secret = require("./secret");

module.exports = {
  plugins: ['solidity-coverage', 'truffle-plugin-verify'],
  api_keys: {
    bscscan: secret.API_KEY,
    etherscan: secret.ETHER_SCAN_API_KEY,
    arbiscan: secret.ARBITRUM_KEY,
    optimistic: secret.OPTIMISM_KEY
  },
  networks: {
    development: {
      // truffle deploy --network development
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      // replace by local ganache account
      // from: "0x7f87C43136F7A4c78788bEb8e39EE400328f184a"
    },
    testnet: { // truffle deploy --network testnet
      provider: () => new HDWalletProvider(secret.MMENOMIC, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: { // truffle deploy --network bsc
      provider: () => new HDWalletProvider(secret.MMENOMIC, `https://bsc-dataseed4.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: { // truffle deploy --network bsc
      provider: () => new HDWalletProvider(secret.MMENOMIC, `https://bsc-dataseed4.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    goerli: {
      // https://infura.io/dashboard/ethereum
      // truffle deploy --network goerli
      provider: () => new HDWalletProvider(secret.MMENOMIC, `https://goerli.infura.io/v3/${secret.INFURA_API_KEY}`),
      network_id: 5,      // goerli id
      gas: 5500000        // goerli has a lower block limit than mainnet
    },
    eth: {
      // https://infura.io/dashboard/ethereum
      // truffle deploy --network mainnet
      provider: () => new HDWalletProvider(secret.MMENOMIC, `https://mainnet.infura.io/v3/${secret.INFURA_API_KEY}`),
      network_id: 1,      // Mainnet id
      gas: 5500000
    },
    arbitrum: {
      // https://infura.io/dashboard/ethereum
      // truffle deploy --network mainnet
      provider: () => new HDWalletProvider(secret.MMENOMIC, `https://arb1.arbitrum.io/rpc`),
      network_id: 42161,      // Mainnet id
      gas: 5500000
    },
    optimism: {
      // https://infura.io/dashboard/ethereum
      // truffle deploy --network optimism
      provider: () => new HDWalletProvider(secret.MMENOMIC, `https://optimism.llamarpc.com`),
      network_id: 10
    }
  },
  compilers: {
    solc: {
      version: "0.8.9",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1
        }
      }
    }
  }
};
