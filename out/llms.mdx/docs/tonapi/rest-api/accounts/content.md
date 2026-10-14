# Accounts (/tonapi/rest-api/accounts)

[Open in Swagger UI](https://tonapi.io/api-v2#operations-tag-Accounts)

**Accounts** service provide API access to structured account information within the TON network. Allows retrieval of data such as balance, transaction history, DNS, multisigs, NFTs, Jettons, and other account-related details without dealing with low-level specifics. All data is regularly updated and can be used to build applications that require accurate and up-to-date account information.

## Operations [#operations]


- [`getAccounts`](https://tonapi.io/api-v2#operations-Accounts-getAccounts) — Get human-friendly information about several accounts without low-level details.
- [`searchAccounts`](https://tonapi.io/api-v2#operations-Accounts-searchAccounts) — Search by account domain name
- [`getAccount`](https://tonapi.io/api-v2#operations-Accounts-getAccount) — Get human-friendly information about an account without low-level details.
- [`getAccountDefiAssets`](https://tonapi.io/api-v2#operations-Accounts-getAccountDefiAssets) — Return DeFi assets locked in custom smart contracts: currently returns TON Whales staking and EVAA lending positions.
- [`getAccountDiff`](https://tonapi.io/api-v2#operations-Accounts-getAccountDiff) — Get account's balance change
- [`accountDnsBackResolve`](https://tonapi.io/api-v2#operations-Accounts-accountDnsBackResolve) — Get account's domains
- [`getAccountDnsExpiring`](https://tonapi.io/api-v2#operations-Accounts-getAccountDnsExpiring) — Get expiring account .ton dns
- [`getAccountEvents`](https://tonapi.io/api-v2#operations-Accounts-getAccountEvents) — Get events for an account. Each event is built on top of a trace which is a series of transactions caused by one inbound message. TonAPI looks for known patterns inside the trace and splits the trace into actions, where a single action represents a meaningful high-level operation like a Jetton Transfer or an NFT Purchase. Actions are expected to be shown to users. It is advised not to build any logic on top of actions because actions can be changed at any time.
- [`getAccountEvent`](https://tonapi.io/api-v2#operations-Accounts-getAccountEvent) — Get event for an account by event_id
- [`getAccountExtraCurrencyHistoryByID`](https://tonapi.io/api-v2#operations-Accounts-getAccountExtraCurrencyHistoryByID) — Get the transfer history of extra currencies for an account.
- [`getAccountJettonsBalances`](https://tonapi.io/api-v2#operations-Accounts-getAccountJettonsBalances) — Get all Jettons balances by owner address
- [`getAccountJettonsHistory`](https://tonapi.io/api-v2#operations-Accounts-getAccountJettonsHistory) — Get the transfer jettons history for account
- [`getAccountJettonBalance`](https://tonapi.io/api-v2#operations-Accounts-getAccountJettonBalance) — Get Jetton balance by owner address
- [`getAccountJettonHistoryByID`](https://tonapi.io/api-v2#operations-Accounts-getAccountJettonHistoryByID) — Please use `getJettonAccountHistoryByID`` instead
- [`getAccountMultisigs`](https://tonapi.io/api-v2#operations-Accounts-getAccountMultisigs) — Get account's multisigs
- [`getAccountNftItems`](https://tonapi.io/api-v2#operations-Accounts-getAccountNftItems) — Get all NFT items by owner address
- [`getAccountPublicKey`](https://tonapi.io/api-v2#operations-Accounts-getAccountPublicKey) — Get public key by account id
- [`reindexAccount`](https://tonapi.io/api-v2#operations-Accounts-reindexAccount) — Update internal cache for a particular account
- [`getAccountSubscriptions`](https://tonapi.io/api-v2#operations-Accounts-getAccountSubscriptions) — Get all subscriptions by wallet address
- [`getAccountTraces`](https://tonapi.io/api-v2#operations-Accounts-getAccountTraces) — Get traces for account
- [`getJettonAccountHistoryByID`](https://tonapi.io/api-v2#operations-Accounts-getJettonAccountHistoryByID) — Get the transfer jetton history for account and jetton
- [`emulateMessageToAccountEvent`](https://tonapi.io/api-v2#operations-Accounts-emulateMessageToAccountEvent) — Emulate sending message to retrieve account-specific events
