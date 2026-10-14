# Extra Currency (/tonapi/rest-api/extra-currency)

[Open in Swagger UI](https://tonapi.io/api-v2#operations-tag-ExtraCurrency)

**Extra Currency in TON** is an additional cryptocurrency similar to tokens but with several key differences in its creation and management. It is a native part of the TON blockchain and is integrated directly into its core configuration.

Unlike traditional tokens, which are created and controlled through smart contracts, extra currency is defined at the network configuration level. These tokens are identified by unique 32-bit identifiers and are embedded in every internal message and account balance, ensuring transparent management of their issuance and circulation.

For more information, please refer to the [official documentation](https://docs.ton.org/v3/documentation/dapps/defi/coins#extra-currencies).

## Operations [#operations]


- [`getExtraCurrencyInfo`](https://tonapi.io/api-v2#operations-ExtraCurrency-getExtraCurrencyInfo) — Get extra currency info by id
