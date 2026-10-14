# Deep Linking into Keeper (/tonkeeper/deep-linking)

Your application might operate outside of Keeper, like a website or a mobile app. Deep links allow you to seamlessly direct users back to a meaningful location within the Keeper app.

## Deep linking into Keeper [#deep-linking-into-keeper]

Use the supported URI schemes and HTTPS links to deep link into a user's Keeper client on the following platforms:

- **Mobile clients**:
  - iPhone
  - Android

### Supported URI Schemes [#supported-uri-schemes]

Keeper supports multiple URI schemes, allowing for flexibility depending on the context in which the link is used. The following schemes are supported:

- **`ton://`**: This scheme is part of the broader TON blockchain standard, enabling interoperability across different TON-based wallets and services.
- **`keeper://`**: The custom URI scheme for deep linking into the Keeper app.
- **`https://app.keeperwallet.com/`**: An HTTPS prefix that can be used in browsers and other environments that do not support custom URI schemes.
- **`tonkeeper://` (legacy)**: The previous custom URI scheme, retained for compatibility with existing integrations.
- **`https://app.tonkeeper.com/` (legacy)**: The previous HTTPS prefix, retained for compatibility with existing integrations. It supports the same paths and parameters as `https://app.keeperwallet.com/`.

Use `keeper://` or `https://app.keeperwallet.com/` for new Keeper integrations. The previous `tonkeeper://` and `https://app.tonkeeper.com/` prefixes are legacy aliases and remain compatible.

These prefixes are interchangeable and serve similar purposes, directing users to specific actions or pages within Keeper.

### Supported URIs [#supported-uris]

For each supported action, the structure of the URI is the same across the supported prefixes. Replace `{PREFIX}` with `ton://`, `keeper://`, `https://app.keeperwallet.com/`, or the legacy `tonkeeper://` and `https://app.tonkeeper.com/` prefixes, unless an action specifies a narrower set of prefixes. Keep the action path and query parameters unchanged.

#### **Transfer** [#transfer]

##### **1. Open Transfer Screen** [#1-open-transfer-screen]

**Description:** Opens the pre-filled Send screen and prompts the user to enter the missing data.

- **Format:**
  ```
  {PREFIX}transfer/{ADDRESS}?amount={AMOUNT}&text={TEXT}
  ```
- **Parameters:**
  - `{ADDRESS}` (required): The recipient's TON address.
  - `amount` (optional): The amount of GRAM to send, in nanocoins.
  - `text` (optional): A URL-encoded UTF-8 text message to attach to the transfer.

**Examples:**

- **Address only:** 
  ```
  ton://transfer/{ADDRESS}
  keeper://transfer/{ADDRESS}
  tonkeeper://transfer/{ADDRESS}
  https://app.keeperwallet.com/transfer/{ADDRESS}
  https://app.tonkeeper.com/transfer/{ADDRESS}
  ```
- **Address + Amount:** 
  ```
  {PREFIX}transfer/{ADDRESS}?amount={AMOUNT}
  ```
- **Address + Text:** 
  ```
  {PREFIX}transfer/{ADDRESS}?text={TEXT}
  ```
- **Address + Amount + Text:** 
  ```
  {PREFIX}transfer/{ADDRESS}?amount={AMOUNT}&text={TEXT}
  ```

##### **2. Address with binary payload** [#2-address-with-binary-payload]

**Description:** Opens the emulation screen or screen with alert about blind signing transactions with amount and destionation. This can be done using `https://app.keeperwallet.com/`, `keeper://`, or the legacy `https://app.tonkeeper.com/` and `tonkeeper://` prefixes.

- **Format:**
  ```
  {PREFIX}transfer/{ADDRESS}?amount={AMOUNT}&bin={BINARY_DATA}
  ```

- **Parameters:**
  - `{ADDRESS}` (required): The recipient's TON address.
  - `bin` (optional): url-encoded base64 BoC which will be attached as a body to internal message.
  - `amount` (requered if bin is presented): The amount of GRAM to send, in nanocoins.

---


##### **3. Expiry Timestamp** [#3-expiry-timestamp]

**Description:** Opens the Send screen with an expiry timestamp for the transaction.

- **Format:**
  ```
  {PREFIX}transfer/{ADDRESS}?amount={AMOUNT}&text={TEXT}&exp={EXPIRY_TIMESTAMP}
  ```
- **Parameters:**
  - `{ADDRESS}` (required): The recipient's TON address.
  - `amount` (optional): The amount of GRAM to send, in nanocoins.
  - `text` (optional): A URL-encoded UTF-8 text message to attach to the transfer.
  - `exp` (optional): Expiry timestamp in seconds since the Unix epoch. 

**Note:** The `exp` parameter, like other parameters, must be included when constructing the message to ensure the blockchain rejects transactions with an expired `exp`.

**Example:**
```
https://app.keeperwallet.com/transfer/EQD2NmD_lH5f5u1Kj3KfGyTvhZSX0Eg6qp2a5IQUKXxOG21n?amount=100000&text=test&exp=2147483647
```

##### **4. Transfer Jetton** [#4-transfer-jetton]

**Description:** Opens the Send screen with a jetton transfer.

- **Format:**
  ```
  https://app.keeperwallet.com/transfer/{ADDRESS}?jetton={JETTON_ADDRESS}&amount={AMOUNT}&text={TEXT}
  ```

- **Parameters:**
  - `{ADDRESS}` (required): The recipient's TON address.
  - `jetton` (required): The jetton master address.
  - `amount` (optional): The amount of GRAM to send, in nanocoins.
  - `text` (optional): A URL-encoded UTF-8 text message to attach to the transfer.

---

#### **Buy GRAM** [#buy-gram]

**Description**: Directs the user to a screen where they can purchase GRAM tokens.

**Format**:
```
{PREFIX}buy-ton
```

---
#### **Staking** [#staking]

**Description**: Navigates to the staking screen, where users can stake/unstake their GRAM.

**Format**:
```
{PREFIX}staking
```

---
#### **Pool** [#pool]

**Description**: Opens a specific liquidity pool within Keeper using the given address.

**Format**:
```
{PREFIX}pool/{ADDRESS}
```
- **Parameters:**
  - **`{ADDRESS}`** (required) — liquidity address in any form
#### **Exchange** [#exchange]
**Description**: Directs the user to an exchange provider

- **Format**:
  ```
  {PREFIX}exchange?provider={PROVIDER}
  ```
- **Parameters:**
  - **`provider`** (required) — exchange provider ID. For example, `mercurio`
  - **`toToken`** (optional) — token to take

---

#### **Swap** [#swap]

**Description**: Opens a swap interface where users can exchange tokens.

- **Format**:
  ```
  {PREFIX}swap?fromToken={FROM_TOKEN}&toToken={TO_TOKEN}
  ```
- **Parameters:**
  - **`fromToken`** (optional) — token to give
  - **`toToken`** (optional) — token to take

---
#### **Battery screen** [#battery-screen]

**Description**: Opens battery screen

- **Format**:
  ```
  {PREFIX}battery?promocode={PROMOCODE}
  ```
- **Parameters:**
  - **`promocode`** (optional) — promocode for revenue share
#### Action [#action]
**Description**: Opens transaction bottomsheet with provided eventId

- **Format**:
  ```
  {PREFIX}action?eventId={EVENT_ID}
  ```
- **Parameters:**
  - **`eventId`** (required) — event ID (hash)

---

#### DApp [#dapp]

**Description**: Opens in-app browser with DApp. Works only for DApps which provided in browser catalog

- **Format**:
  ```
  {PREFIX}dapp/{DAPP_URL}
  ```
- **Parameters:**
  - **`{DAPP_URL}`**  (required) — DApp URL. Supports only **https** protocol

---

#### TON Connect [#ton-connect]

[bridge.md](https://github.com/ton-blockchain/ton-connect/blob/main/bridge.md#universal-link) at main `ton-blockchain/ton-connect`

---
### Standard Reference [#standard-reference]

The `ton://` scheme is part of the broader TON blockchain standard, which defines how TON-based applications and services should implement deep linking. You can learn more about the TON standard and its URI scheme by visiting the official documentation [here](https://docs.ton.org/).

---

### Example Workflows [#example-workflows]

- **Quick Payments:** Integrate payment requests directly from your website, allowing users to complete transactions with a single tap using any of the supported URI schemes.
- **In-app Transactions:** Use deep links to facilitate seamless transfers between users within your application.
- **Cross-Wallet Compatibility:** Utilize the `ton://` scheme to ensure compatibility with other TON-based wallets and services.

### External Deep Links [#external-deep-links]

Keeper supports integration with other TON services through similar deep linking structures.

#### **Tonhub** [#tonhub]

**Description:** Tonhub also supports deep linking for transfers, compatible with Keeper.

- **Format:**
  ```
  https://tonhub.com/transfer/{ADDRESS}?amount={AMOUNT}&text={TEXT}
  ```

**Examples:**
```
https://tonhub.com/transfer/EQD2NmD_lH5f5u1Kj3KfGyTvhZSX0Eg6qp2a5IQUKXxOG21n
https://tonhub.com/transfer/EQD2NmD_lH5f5u1Kj3KfGyTvhZSX0Eg6qp2a5IQUKXxOG21n?amount=10000
https://tonhub.com/transfer/EQD2NmD_lH5f5u1Kj3KfGyTvhZSX0Eg6qp2a5IQUKXxOG21n?text=just%20message
https://tonhub.com/transfer/EQD2NmD_lH5f5u1Kj3KfGyTvhZSX0Eg6qp2a5IQUKXxOG21n?amount=7000&text=just%20message
```

### Example Workflows [#example-workflows-1]

- **Quick Payments:** Integrate payment requests directly from your website, allowing users to complete transactions with a single tap using `keeper://transfer` links.
- **In-app Transactions:** Use deep links to facilitate seamless transfers between users within your application.
- **Link to Specific Transfers:** Provide support or history review by linking directly to specific transactions or transfers.

---

This restructured documentation groups related deep links together, making it easier to understand the available options and how to use them effectively.
