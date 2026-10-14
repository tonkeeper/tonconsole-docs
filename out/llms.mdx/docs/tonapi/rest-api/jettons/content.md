# Jettons (/tonapi/rest-api/jettons)

[Open in Swagger UI](https://tonapi.io/api-v2#operations-tag-Jettons)

The **Jettons** service provides access to fungible tokens on the TON blockchain. This service enables retrieval of detailed information about fungible tokens, including balances, transaction history, and metadata. Jettons are digital assets that can be transferred between users and used as a medium of exchange within the TON ecosystem.

## Operations [#operations]


- [`getJettonsEvents`](https://tonapi.io/api-v2#operations-Jettons-getJettonsEvents) — Get only jetton transfers in the event
- [`getJettons`](https://tonapi.io/api-v2#operations-Jettons-getJettons) — Get a list of all indexed jetton masters in the blockchain.
- [`getJettonInfosByAddresses`](https://tonapi.io/api-v2#operations-Jettons-getJettonInfosByAddresses) — Get jetton metadata items by jetton master addresses
- [`getJettonInfo`](https://tonapi.io/api-v2#operations-Jettons-getJettonInfo) — Get jetton metadata by jetton master address
- [`getJettonHolders`](https://tonapi.io/api-v2#operations-Jettons-getJettonHolders) — Get jetton's holders
- [`getJettonTransferPayload`](https://tonapi.io/api-v2#operations-Jettons-getJettonTransferPayload) — Get jetton's custom payload and state init required for transfer
