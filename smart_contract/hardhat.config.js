require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/I9qBmhbowq_5qmynB6aY4_fw4hhCXFeY',
      accounts: [
        'a9f5e4ed78c6609f69c2bb437371b0730b2b3f8919a8985da7293b1c9c275f24',
    ],
    },
  },
}