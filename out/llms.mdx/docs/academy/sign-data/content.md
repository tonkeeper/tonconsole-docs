# SignData in TON via TonConnect: A Developer Guide (/academy/sign-data)

When it comes to critical actions, a simple button press just doesn’t cut it. Real consent feels like your wallet standing tall and declaring: *"Yes, it’s me! And I approve this!"*

A signature is the real deal: cryptographic, verifiable, secure. You can sign anything — text, bytes, or cells. The signature can be verified off-chain in your dApp or passed into a smart contract for on-chain logic. <br /><br />


## What is SignData and Why It Matters [#what-is-signdata-and-why-it-matters]

Any action where the user must **consciously and explicitly** confirm their intent – like updating public profile information, linking a new email or phone number, or accepting DAO terms – deserves something more robust than just a click.

**SignData** lets your dApp request a cryptographic signature – from the user's wallet – on arbitrary content. The user sees exactly what they are signing and can either approve or decline. The signature is generated using the same private key that signs TON transactions, but it provides no direct access to funds.

For a dApp, this signature is a way to secure critical actions, verify a user's real intent, and – if needed – pass validated data into a smart contract for on-chain use.


If you don’t clearly get what an **Cell**, **TL-B**, or **public key** is? Read the glossary below

<Accordions>
<Accordion title="Glossary (quick refresher)">
**TonConnect**  –  The protocol connecting your dApp to the user's wallet. It handles connections, transaction requests, and data signing. <br />
**SignData**  –  A TonConnect method that allows a dApp to request the user to sign arbitrary data (text, bytes, or Cell) with their wallet. No transaction involved – just a signature.<br />
**Cell**  –  The atomic unit of data in TON. Holds up to 1023 bits and 4 references to other cells. Everything in TON – accounts, messages, blocks – is made of Cells. Each Cell has a hash that acts as its unique ID.<br />
**TL-B schema**  –  Declarative definition of Cell structure. It’s required for wallets to display signing details and for smart contracts to validate the content.<br />
**Ed25519**  –  The signing algorithm used in TON. It powers both transactions and `signData`. Everything signed by the user uses Ed25519 over a SHA256 hash of a strictly formatted message.<br />
**Address**  –  The account address in TON. Formed by a `workchain` (usually `0`) and a hash of the contract’s code and initialization data. For standard wallets, this hash is deterministically derived from the public key.<br />
**Public Key**  –  The public part of the user’s key pair, derived from the private key. Used to verify signatures. In TON, the public key becomes available on-chain only after the wallet is initialized (i.e., has sent at least one transaction). Until then, it’s known only to the dApp via TonConnect and the user.<br />
</Accordion>
</Accordions>

## Choosing the Right Format [#choosing-the-right-format]

### 1. Text [#1-text]

Use this when the data is human-readable.

**Pros:**
- The user sees exactly what they are signing.
- Simple to implement.
- Perfect for off-chain confirmations.

**Example:**

```ts
{
  type: 'text',
  text: 'I confirm deletion of my account and all associated data.'
}
```

### 2. Binary [#2-binary]

Use this when signing a hash, arbitrary bytes, or a file.

**Pros:**

- Useful for generating digital receipts, hashed content references, etc.
- Works when the content isn’t human-readable or shouldn't be shown.

**Example:**

```ts
{
  type: 'binary',
  bytes: '1Z/SGh+3HFMKlVHSkN91DpcCzT4C5jzHT3sA/24C5A=='
}
```

### 3. Cell [#3-cell]

Use this if the signed data should be **verifiable and restorable inside a smart contract**.

**Pros:**

- Smart contracts can validate the signature during execution.
- Supports structured data via TL-B schemas.

**Example:**

```ts
{
  type: 'cell',
  schema: 'message#_ text:string = Message;',
  cell: 'te6ccgEBAQEAVwAAqg+KfqVUbeTvKqB4h0AcnDgIAZucsOi6TLrf...'
}
```
**Clarification on Root Type**: If the TL-B schema provided in SignData.cell.schema defines multiple types (for example, one primary type along with auxiliary helper types), the last type definition in the schema is treated as the root type for serialization and deserialization. In practice, this means the cell’s content is parsed as an instance of the final type declared in the schema.


## How to Request a Signature via TonConnect [#how-to-request-a-signature-via-tonconnect]

```ts
const result = await tonConnectUi.signData({
  type: 'text',
  text: 'I confirm this action.',
});
```

TonConnect handles the request and shows the prompt in the user’s wallet. They either sign or decline.

**You receive:**
```ts
{
  signature: 'base64-ed25519-signature',
  address: '0:9a...',
  timestamp: 1710000000,
  domain: 'your-app.com',
  payload: {
    type: 'text',
    text: 'I confirm this action.'
  }
}
```

---

## How the Signature Is Built [#how-the-signature-is-built]

### For `text` and `binary` [#for-text-and-binary]

1. The message is constructed:

```
0xffff ++ "ton-connect/sign-data/" ++ Address ++ AppDomain ++ Timestamp ++ Payload
```

2. Components:
    - `Address`: wallet address (workchain + hash)
    - `AppDomain`: dApp domain as UTF-8 string with length
    - `Timestamp`: time of signing
    - `Payload`:
        - Prefix `txt` / `bin`
        - Length
        - Text (utf-8 encoded) or bytes
3. Then:

```ts
Ed25519.sign(sha256(message), privateKey)
```

### For `cell` [#for-cell]

1. A Cell is built:

```ts
beginCell()
  .storeUint(0x75569022, 32)
  .storeUint(crc32(schema), 32)
  .storeUint(timestamp, 64)
  .storeAddress(userWalletAddress)
  .storeStringRefTail(appDomain)
  .storeRef(cell)
```

2. The hash of this Cell is signed:

```ts
Ed25519.sign(payload.hash(), privateKey)
```
<br />
🔥 Example signing in JS: [https://github.com/mois-ilya/ton-sign-data-reference](https://github.com/mois-ilya/ton-sign-data-reference)

## How to Verify the Signature [#how-to-verify-the-signature]

### In JavaScript (off-chain) [#in-javascript-off-chain]

For `text` and `binary`, you can reconstruct the message:

1. Rebuild the byte array exactly as described above.
2. Retrieve the public key (from TonConnect or known in advance).
3. Verify:

```ts
import nacl from 'tweetnacl';

const isValid = await nacl.sign.detached.verify(hash, signature, publicKey);
```

**Important:** Always ensure that `result.address` matches the wallet you requested the signature from. Otherwise, an attacker could swap in a valid signature from a different wallet.
<br />
🔥 Example verification in JS: [https://github.com/mois-ilya/ton-sign-data-reference](https://github.com/mois-ilya/ton-sign-data-reference)

### In a Smart Contract (on-chain) [#in-a-smart-contract-on-chain]

For the `cell` format, smart contracts can verify the signature directly.

They must validate:
- Prefix: `0x75569022`
- Schema hash matches
- Timestamp is recent
- Address matches
- App domain matches
- Signature is valid using `ed25519`
  📄  [check_signature in standard library](https://docs.ton.org/v3/documentation/smart-contracts/func/docs/stdlib#check_signature)
<br />
🔥 On-chain example in FunC: [https://github.com/p0lunin/sign-data-contract-verify-example](https://github.com/p0lunin/sign-data-contract-verify-example)

---

## TL;DR [#tldr]

The **SignData** method in TonConnect is a secure way for a dApp to request a user’s cryptographic signature on text, bytes, or TON cells – directly through their wallet. It’s **not a transaction**, but a confirmation that can be verified off-chain or on-chain.

- **Users see what they sign** (if it's text or a proper TL-B schema).
- **Signature uses the same key as for transactions**, but doesn’t send anything.
- **Verification works anywhere** – on your backend or inside a smart contract.
<br />

| Format   | What’s Signed                | Wallet UI                   | Use Case                        |
| -------- | ---------------------------- | --------------------------- | ------------------------------- |
| `text`   | Human-readable message       | Displayed as-is             | Action confirmation, agreements |
| `binary` | Bytes / hashes / identifiers | Shows warning               | Document hashes, TX IDs         |
| `cell`   | Cell with TL-B schema        | Schema + warning or content | Smart contract validation       |

<br />

If you’re building a dApp that needs real user consent and want to verify it without extra hassle – SignData gets the job done.

## Useful Links [#useful-links]

- **Demo dApp to test `signData`**  
    [tonkeeper.github.io/demo-dapp-with-wallet](https://tonkeeper.github.io/demo-dapp-with-wallet/)
- **JS signature verification example**  
    [github.com/mois-ilya/ton-sign-data-reference](https://github.com/mois-ilya/ton-sign-data-reference)
- **Smart contract verification example**  
    [github.com/p0lunin/sign-data-contract-verify-example](https://github.com/p0lunin/sign-data-contract-verify-example)
- **Keeper’s SignData spec**  
    [github.com/tonkeeper/ton-connect-docs – SignData](https://github.com/tonkeeper/ton-connect-docs/blob/main/requests-responses.md#sign-data)
- **FunC `check_signature` standard lib**  
    [docs.ton.org – check_signature](https://docs.ton.org/v3/documentation/smart-contracts/func/docs/stdlib#check_signature)
