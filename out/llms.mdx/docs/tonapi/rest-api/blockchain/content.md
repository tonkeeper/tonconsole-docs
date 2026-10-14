# Blockchain (/tonapi/rest-api/blockchain)

[Open in Swagger UI](https://tonapi.io/api-v2#operations-tag-Blockchain)

The **Blockchain** service provides low-level access to the TON blockchain, enabling retrieval of detailed information about blocks, transactions, accounts, and more. These endpoints are essential for building tools that require deep blockchain data and are critical for applications that interact closely with the TON blockchain.

**TONAPI** ensures that data retrieved from the blockchain is accurate and up-to-date by continuously indexing the blockchain and maintaining a low-latency connection to the TON network.

## Operations [#operations]


- [`getBlockchainRawAccounts`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainRawAccounts) — Get low-level information about several accounts taken directly from the blockchain.
- [`getBlockchainRawAccount`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainRawAccount) — Get low-level information about an account taken directly from the blockchain.
- [`blockchainAccountInspect`](https://tonapi.io/api-v2#operations-Blockchain-blockchainAccountInspect) — Blockchain account inspect
- [`execGetMethodForBlockchainAccount`](https://tonapi.io/api-v2#operations-Blockchain-execGetMethodForBlockchainAccount) — Execute get method for account
- [`execGetMethodWithBodyForBlockchainAccount`](https://tonapi.io/api-v2#operations-Blockchain-execGetMethodWithBodyForBlockchainAccount) — Execute get method for account
- [`getBlockchainAccountTransactions`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainAccountTransactions) — Get account transactions
- [`getBlockchainBlock`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainBlock) — Get blockchain block data
- [`downloadBlockchainBlockBoc`](https://tonapi.io/api-v2#operations-Blockchain-downloadBlockchainBlockBoc) — Download blockchain block BOC
- [`getBlockchainBlockTransactions`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainBlockTransactions) — Get transactions from block
- [`getBlockchainConfig`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainConfig) — Get blockchain config
- [`getRawBlockchainConfig`](https://tonapi.io/api-v2#operations-Blockchain-getRawBlockchainConfig) — Get raw blockchain config
- [`getLibraryByHash`](https://tonapi.io/api-v2#operations-Blockchain-getLibraryByHash) — Get library cell
- [`getBlockchainMasterchainHead`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainMasterchainHead) — Get last known masterchain block
- [`getBlockchainMasterchainBlocks`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainMasterchainBlocks) — Get all blocks in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain.  We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
- [`getBlockchainConfigFromBlock`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainConfigFromBlock) — Get blockchain config from a specific block, if present.
- [`getRawBlockchainConfigFromBlock`](https://tonapi.io/api-v2#operations-Blockchain-getRawBlockchainConfigFromBlock) — Get raw blockchain config from a specific block, if present.
- [`getBlockchainMasterchainShards`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainMasterchainShards) — Get blockchain block shards
- [`getBlockchainMasterchainTransactions`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainMasterchainTransactions) — Get all transactions in all shards and workchains between target and previous masterchain block according to shards last blocks snapshot in masterchain. We don't recommend to build your app around this method because it has problem with scalability and will work very slow in the future.
- [`sendBlockchainMessage`](https://tonapi.io/api-v2#operations-Blockchain-sendBlockchainMessage) — Send message to blockchain
- [`getBlockchainTransactionByMessageHash`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainTransactionByMessageHash) — Get transaction data by message hash
- [`getReducedBlockchainBlocks`](https://tonapi.io/api-v2#operations-Blockchain-getReducedBlockchainBlocks) — Get reduced blockchain blocks data
- [`getBlockchainTransaction`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainTransaction) — Get transaction data
- [`getBlockchainValidators`](https://tonapi.io/api-v2#operations-Blockchain-getBlockchainValidators) — Get blockchain validators
