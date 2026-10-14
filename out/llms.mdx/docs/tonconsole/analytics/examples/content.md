# Examples (/tonconsole/analytics/examples)

#### Select all wallets which own AMBRA jettons and Whales Club NFTs. [#select-all-wallets-which-own-ambra-jettons-and-whales-club-nfts]

```sql
SELECT human_readable
FROM blockchain.accounts a
JOIN (
    SELECT DISTINCT nft.owner_account_id
    FROM getmethods.get_nft_data nft
    JOIN getmethods.get_wallet_data jetton
      ON jetton.owner_account_id = nft.owner_account_id
    WHERE nft.collection_account_id = '0:ef4453182ddc66bd8dd393e71f58c2ea0e75c5fc47253b6169e30c23df75a194'
      AND jetton.jetton_account_id = '0:9c2c05b9dfb2a7460fda48fae7409a32623399933a98a7a15599152f37572b49'
) t ON a.id = t.owner_account_id
```

#### TPS per hour [#tps-per-hour]

```sql
SELECT utime / 3600 * 3600 + 3600, Count(1) / 3600.0
FROM blockchain.transactions
WHERE utime > extract(epoch FROM Now() - interval '7 days')::bigint
GROUP BY utime / 3600
ORDER BY utime / 3600
```

#### Operations by type for last day [#operations-by-type-for-last-day]

```sql
SELECT
    CASE
        WHEN m.decoded_operation != '' THEN m.decoded_operation
        WHEN m.op_code IS NOT NULL THEN 'unknown'
        ELSE 'SimpleTransfer'
    END op, count(1)
FROM blockchain.messages m
JOIN blockchain.transactions txs ON txs.in_msg = m.id
WHERE utime > extract(EPOCH FROM now() - interval '1 day')::bigint
GROUP BY op
```

#### Jetton metadata [#jetton-metadata]

Jetton metadata can be resolved from `url` in `getmethods.get_jetton_data` table using `nft.url_metadata`. See [Database scheme → Metadata](/tonconsole/analytics/scheme#metadata).

```sql
SELECT
    jd.account_id,
    m.metadata ->> 'name'                       AS name,
    m.metadata ->> 'symbol'                     AS symbol,
    COALESCE((m.metadata ->> 'decimals')::int, 9) AS decimals
FROM getmethods.get_jetton_data jd
LEFT JOIN nft.url_metadata m ON m.url = jd.url
WHERE jd.account_id = '0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe'
```

Result:

| account_id | name | symbol | decimals |
| --- | --- | --- | --- |
| `0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe` | Tether USD | USD₮ | 6 |
