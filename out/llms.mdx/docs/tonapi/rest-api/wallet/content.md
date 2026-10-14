# Wallet (/tonapi/rest-api/wallet)

[Open in Swagger UI](https://tonapi.io/api-v2#operations-tag-Wallet)

The Wallet service provides a comprehensive set of endpoints for managing and interacting with blockchain wallets. This service is designed to support various wallet operations, including emulation, backup, authentication, and retrieval of wallet-specific data.

## Operations [#operations]


- [`getWalletsByPublicKeyBulk`](https://tonapi.io/api-v2#operations-Wallet-getWalletsByPublicKeyBulk) — Get wallets by a list of public keys
- [`getWalletsByPublicKey`](https://tonapi.io/api-v2#operations-Wallet-getWalletsByPublicKey) — Get wallets by public key
- [`tonConnectProof`](https://tonapi.io/api-v2#operations-Wallet-tonConnectProof) — Account verification and token issuance
- [`getWalletInfo`](https://tonapi.io/api-v2#operations-Wallet-getWalletInfo) — Get human-friendly information about a wallet without low-level details.
- [`getAccountSeqno`](https://tonapi.io/api-v2#operations-Wallet-getAccountSeqno) — Get account seqno
- [`emulateMessageToWallet`](https://tonapi.io/api-v2#operations-Wallet-emulateMessageToWallet) — Emulates a wallet message on the current blockchain state and derives its consequences for the signing wallet
