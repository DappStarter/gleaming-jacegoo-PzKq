require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remember equip gloom clinic swift tennis'; 
let testAccounts = [
"0x16167909ea29c4188163a18b5fd8d888ede93c6c652f4d1cfdf6f82b41779a2d",
"0xc3391c56e14080c86f6a37d3e8f1afbca1c9d834cfd2d8b1904b986c8ac45046",
"0xfff0e4df68cdda180541c696079d2ba344310c942768ec4fcc5939e46ef90ddb",
"0x104c28bffd2c92ad85e8e58bbed1cd0ec42ba93031e82ae0a435bbdfba5a2c3a",
"0x2567c70ae4eda468fe62019866832980e0b6daa359a42e0ae03744d4fdba419b",
"0x32ec954371717ab06eef3593088c3a0117a2fc15607b89300f52f89dfa706489",
"0xaea5e0078aa6914f293c818837e1e7309a84dcf31259448ae4ef1caaec3be9e4",
"0xcdac3956adef8eadb4b9aec4b52b66e95f0733866f146413d03489a625b1380b",
"0xa04a178d1f1fb9d3e65a5993504cceb21b38530d624f64bbe5f16e6c2500313f",
"0x67cabd2800d83a82783c7c686bb50304f1e8fdef7c5426b34852bff3d53252e0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

