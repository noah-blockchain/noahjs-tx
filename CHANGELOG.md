## 6.1.0 - 2019-08-01
- rename `formatCoin` to `coinToBuffer`, save old name as alias
- add `bufferToCoin` method

## 6.0.0 - 2019-07-30
- **BREAKING** rename UMD module from `noahJsTx` to `noahTx`
- fix browser usage of UMD module
- fix bundle tests

## 5.1.3 - 2019-07-08
- update deps

## 5.1.2 - 2019-06-05
- update deps

## 5.1.1 - 2019-05-14
- update deps

# 5.1.0 - 2019-05-14
- Moved: `defineProperties` from [noahjs-tx](https://github.com/noah-blockchain/noahjs-tx) package

## 5.0.3 - 2019-05-14
- update deps

## 5.0.2 - 2019-04-17
- **BREAKING** rename `chainID` into `chainId`

## 5.0.1 - 2019-04-16
- fix tx hash

## 5.0.0 - 2019-04-12
- **BREAKING** add `chainID` tx param to support noah-go-node [0.19.0](https://github.com/noah-blockchain/noah-go-node/releases/tag/v0.19.0)
- remove deprecated tx types

## 4.5.0 - 2019-04-09
- rename TX_TYPE_SELL_COIN -> TX_TYPE_SELL, TX_TYPE_SELL_ALL_COIN -> TX_TYPE_SELL_ALL, TX_TYPE_BUY_COIN -> TX_TYPE_BUY, previous values are now deprecated

## 4.4.0 - 2019-03-07
- add txTypeList

## 4.3.1 - 2019-02-28
- fix package.json "browser" field

## 4.3.0 - 2019-02-27
- add UMD and commonjs builds

## 4.2.2 - 2019-02-19
- expose `TX_TYPE_EDIT_CANDIDATE` in index.js
- update deps

## 4.2.1 - 2019-02-18
- update deps
- fix ethereumjs-util

## 4.2.0 - 2019-02-06
- add `NoahTxDataMultisend`

## 4.1.0 - 2019-01-15
- add new 0x0E `NoahTxDataEditCandidate` according to noah-go-node [0.10.0](https://github.com/noah-blockchain/noah-go-node/releases/tag/v0.10.0)

## 4.0.0 - 2018-12-06
- **BREAKING** added new fields to convert data types to support noah-go-node [0.8.0](https://github.com/noah-blockchain/noah-go-node/releases/tag/v0.8.0)
- add `minimumValueToBuy` to `NoahTxDataSell` and `NoahTxDataSellAll`
- add `maximumValueToSell` to `NoahTxDataBuy`

## 3.1.0 - 2018-11-30
- fix `NoahTxDataCreateMultisig` to make it work
- provide exports to index.js

## 3.0.0 - 2018-11-29
- **BREAKING** remove converter (moved to `noahjs-util` package)
- add `NoahTxDataCreateMultisig`
- add tx types constants

## 2.0.0 - 2018-10-15
- **BREAKING** change tx structure to support MultiSig
- update dependencies

## 1.5.0 - 2018-08-21
- **BREAKING** rename tx-data fields

## 1.4.0 - 2018-08-14
- **BREAKING** rename tx-data files: `sell-coin` -> `sell`, `sell-all-coin` -> `sell-all`, `buy-coin` -> `buy` 
- add `converter.bipToPip` and `converter.pipToBip` alias methods

## 1.3.0 - 2018-08-11
- **BREAKING** rename `unbound` to `unbond`, tx data and tx type are affected

## 1.2.0 - 2018-07-23
- add `gasCoin` field to the transaction


## 1.1.0 - 2018-07-20
- add `SellAllCoin` tx type
- update other tx type values