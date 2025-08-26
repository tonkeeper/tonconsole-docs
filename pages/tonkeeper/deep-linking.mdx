# Deep Linking into Tonkeeper — Complete Guide

Your application might operate outside of Tonkeeper, like a website or a mobile app. Deep links let you open a specific screen or execute a specific action inside the Tonkeeper app with all the parameters prefilled.

This guide makes the behavior **unambiguous** and **complete**, covering all supported parameters and their combinations for TON and Jetton transfers. It also documents validation rules and common errors.

> **Notation used below**
>
> - `{PREFIX}` means one of the three interchangeable schemes: `ton://`, `tonkeeper://`, or `https://app.tonkeeper.com/`.
> - `{ADDRESS}` means a valid TON recipient address. It can be a raw address or a **TON DNS** name like `example.ton`.
> - Unless noted otherwise, **all parameter values must be URL‑encoded**.

---

## Supported URI Schemes

Tonkeeper supports three interchangeable schemes. Choose any of them depending on your environment:

- **`ton://`** — TON standard scheme. Recommended for cross‑wallet compatibility.
- **`tonkeeper://`** — custom scheme for direct app deep link on mobile.
- **`https://app.tonkeeper.com/`** — web scheme usable from browsers and environments without custom schemes.

All three schemes accept **the same path and query parameters**. You can replace `{PREFIX}` with any of them.

---

## Address Formats

`{ADDRESS}` accepts:

- A valid TON address in friendly format (bounceable/unbounceable) or raw.
- A **TON DNS** name ending with `.ton` (e.g., `subbotin.ton`).

---

## Transfer Parameters — Quick Reference

The following parameters are used across transfer links. Types are given using string representations; values must be URL‑encoded.

| Parameter | Type                                   | Applies to   | Required                          | Rules & Notes                                                                                                                                                                                |
| --------- | -------------------------------------- | ------------ | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`  | string (integer)                       | TON & Jetton | Optional\*                        | For **TON**: amount in **nanotons**. For **Jetton**: amount in the token’s **smallest units** (atomic units). _Required when `bin` is present._                                              |
| `text`    | string (UTF‑8, URL‑encoded)            | TON & Jetton | Optional                          | Comment attached to the transfer. **Must not be used with `bin`** (mutually exclusive).                                                                                                      |
| `bin`     | string (base64 BoC, URL‑encoded)       | TON & Jetton | Optional                          | Binary payload attached as the **internal message body**. **Requires `amount`.** **Mutually exclusive with `text`.**                                                                         |
| `exp`     | string (UNIX seconds)                  | TON & Jetton | Optional                          | Expiry/valid‑until timestamp. Transactions **must be rejected** if current time \> `exp`. Can be combined with any valid combo **except** pairs that are already invalid (e.g., `text+bin`). |
| `init`    | string (StateInit base64, URL‑encoded) | TON only     | Optional                          | Adds **StateInit** to the outbound message. Can be combined with `text`, `bin` (see mutual exclusions), and `exp`.                                                                           |
| `jetton`  | string (jetton master address)         | Jetton only  | **Required for jetton transfers** | Presence of this parameter switches the flow to **Jetton transfer**.                                                                                                                         |

> **Mutual exclusions**
>
> - `text` **and** `bin` **cannot** be used together.
> - When `bin` is present, `amount` becomes **required**.

---

## Compatibility Matrix (Allowed combinations)

**TON Transfer**

| Combination           | Allowed? | Notes                                                       |
| --------------------- | :------: | ----------------------------------------------------------- |
| `amount`              |    ✅    | Opens Send screen with TON amount prefilled.                |
| `text`                |    ✅    | With or without `amount`.                                   |
| `bin`                 |    ❌    | Use `bin` **with** `amount`.                                |
| `amount+bin`          |    ✅    | Shows emulation/blind‑signing prompt; attaches BoC as body. |
| `amount+text`         |    ✅    | Commented transfer.                                         |
| `amount+exp`          |    ✅    | Valid until `exp`. Expired → rejection.                     |
| `text+exp`            |    ✅    | With or without `amount`.                                   |
| `amount+bin+exp`      |    ✅    | Valid until `exp`.                                          |
| `amount+init`         |    ✅    | Message carries StateInit.                                  |
| `amount+init+text`    |    ✅    | Comment + StateInit.                                        |
| `amount+init+bin`     |    ✅    | Payload via `bin` + StateInit.                              |
| `amount+init+exp`     |    ✅    | Valid until `exp`.                                          |
| `amount+init+bin+exp` |    ✅    | Valid until `exp`.                                          |
| `amount+text+bin`     |    ❌    | `text` and `bin` are mutually exclusive.                    |

**Jetton Transfer**

| Combination             | Allowed? | Notes                                                                  |
| ----------------------- | :------: | ---------------------------------------------------------------------- |
| `jetton`                |    ✅    | Opens Jetton transfer screen. `amount` may be omitted (user fills in). |
| `jetton+amount`         |    ✅    | Amount in **token’s smallest units**.                                  |
| `jetton+text`           |    ✅    | With or without `amount`.                                              |
| `jetton+bin`            |    ✅    | Requires `amount`. Attaches BoC as body.                               |
| `jetton+exp`            |    ✅    | Valid until `exp`. Expired → rejection.                                |
| `jetton+amount+text`    |    ✅    | Commented jetton transfer.                                             |
| `jetton+amount+bin`     |    ✅    | Blind‑signing/emulation with BoC + jetton.                             |
| `jetton+amount+exp`     |    ✅    | Valid until `exp`.                                                     |
| `jetton+amount+bin+exp` |    ✅    | Valid until `exp`.                                                     |
| `jetton+text+bin`       |    ❌    | `text` and `bin` are mutually exclusive.                               |

> **Note on Jetton `amount`**
> The `amount` for jettons represents the **token balance units** (atomic units). For display Tonkeeper converts using the token’s decimals.

---

## Transfer (TON)

### 1) Open Transfer Screen

Opens the prefilled Send screen. Any missing data can be entered by the user.

**Format**

```text
{PREFIX}transfer/{ADDRESS}?amount={AMOUNT}&text={TEXT}
```

**Examples**

```text
# Address only (user picks amount)
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt

# Address + amount (1 nanotons)
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1

# Address + text
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?text=test

# Address + amount + text
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&text=test

# DNS address + amount
ton://transfer/subbotin.ton?amount=1
```

### 2) Address with Binary Payload (`bin`)

Opens the emulation screen or a blind‑signing warning. The payload is attached as **internal message body**.

**Rules**

- `bin` must be a **URL‑encoded base64 BoC**.
- `amount` is **required** when `bin` is present.
- `text` **must not** be combined with `bin`.

**Format**

```text
{PREFIX}transfer/{ADDRESS}?amount={AMOUNT}&bin={BINARY_DATA}
```

**Examples**

```text
# TON + bin
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&bin=te6ccgEBAQEANwAAaV0r640BleSq4Ql3m5OrdlSApYTNRMdDGUFXwTpwZ1oe1G8cPlS_Zym8CwoAdO4mWSned-Fg

# Invalid: text + bin (must be rejected)
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&text=test&bin=te6ccgEBAQEANwAAaV0r640BleSq4Ql3m5OrdlSApYTNRMdDGUFXwTpwZ1oe1G8cPlS_Zym8CwoAdO4mWSned-Fg
```

### 3) Expiry Timestamp (`exp`)

Ensures the transaction is only valid until a given time.

**Rules**

- `exp` is a UNIX timestamp in **seconds**.
- Clients must **reject** expired transactions.
- Can be combined with any valid combination (e.g., `text`, `bin`, `init`).

**Format**

```text
{PREFIX}transfer/{ADDRESS}?amount={AMOUNT}&text={TEXT}&exp={EXPIRY_TIMESTAMP}
```

**Examples**

```text
# Valid until exp
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&exp=1796015245

# Amount + text + exp
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&text=test&exp=1796015245

# Bin + exp
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&bin=te6ccgEBAQEANwAAaV0r640BleSq4Ql3m5OrdlSApYTNRMdDGUFXwTpwZ1oe1G8cPlS_Zym8CwoAdO4mWSned-Fg&exp=1796015245

# Expired (must be rejected)
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&exp=174000000
```

### 4) StateInit (`init`)

Adds a **StateInit** cell to the outbound message.

**Rules**

- `init` must be a URL‑encoded base64 StateInit.
- Can be combined with `text`, `exp`, and `bin` (respecting `text` vs `bin` exclusion).

**Examples**

```text
# With init
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&init=te6ccgEBAgEACwACATQBAQAI_____w%3D%3D

# init + text
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&init=te6ccgEBAgEACwACATQBAQAI_____w%3D%3D&text=test

# init + bin
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&init=te6ccgEBAgEACwACATQBAQAI_____w%3D%3D&bin=te6ccgEBAQEANwAAaV0r640BleSq4Ql3m5OrdlSApYTNRMdDGUFXwTpwZ1oe1G8cPlS_Zym8CwoAdO4mWSned-Fg

# init + bin + exp
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&init=te6ccgEBAgEACwACATQBAQAI_____w%3D%3D&bin=te6ccgEBAQEANwAAaV0r640BleSq4Ql3m5OrdlSApYTNRMdDGUFXwTpwZ1oe1G8cPlS_Zym8CwoAdO4mWSned-Fg&exp=1796015245
```

---

## Transfer Jetton

Opens the Send screen for a **jetton** transfer. All rules about `text`, `bin`, and `exp` from the TON section apply here too (including `text` vs `bin` exclusion and `amount` requirement with `bin`).

**Format**

```text
{PREFIX}transfer/{ADDRESS}?jetton={JETTON_ADDRESS}&amount={AMOUNT}&text={TEXT}&bin={BINARY_DATA}&exp={EXPIRY_TIMESTAMP}
```

**Parameter specifics**

- `jetton` — **required** jetton master address.
- `amount` — amount of **jettons in the token’s smallest units** (atomic units). May be omitted; user can fill the amount manually.

**Examples**

```text
# Jetton + amount
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&jetton=EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs

# Jetton + amount + text
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&jetton=EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs&text=test

# Jetton + amount + bin
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&jetton=EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs&bin=te6ccgEBAQEANwAAaV0r640BleSq4Ql3m5OrdlSApYTNRMdDGUFXwTpwZ1oe1G8cPlS_Zym8CwoAdO4mWSned-Fg

# Jetton + amount + exp
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&jetton=EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs&exp=1796015245

# Jetton + amount + bin + exp
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&jetton=EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs&bin=te6ccgEBAQEANwAAaV0r640BleSq4Ql3m5OrdlSApYTNRMdDGUFXwTpwZ1oe1G8cPlS_Zym8CwoAdO4mWSned-Fg&exp=1796015245

# Jetton + DNS address
ton://transfer/subbotin.ton?amount=1&jetton=EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs

# Invalid: Jetton + text + bin (must be rejected)
ton://transfer/UQDNzlh0XSZdb5_Qrlx5QjyZHVAO74v5oMeVVrtF_5Vt1rIt?amount=1&jetton=EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs&text=test&bin=te6ccgEBAQEANwAAaV0r640BleSq4Ql3m5OrdlSApYTNRMdDGUFXwTpwZ1oe1G8cPlS_Zym8CwoAdO4mWSned-Fg
```

---

## Validation & Error Handling

Clients SHOULD validate and handle the following cases:

- `amount` missing **when `bin` is present** → reject.
- `text` + `bin` together → reject.
- `amount` must be a non‑negative integer. `0` is allowed but may be rejected by UX policy; in most cases a **positive** value is expected.
- `exp` must be a valid UNIX timestamp (seconds). When current time > `exp` → reject.
- `bin` must be a valid URL‑encoded base64 BoC → otherwise reject.
- `init` must be valid URL‑encoded base64 StateInit → otherwise reject.
- Unknown parameters SHOULD be ignored.

> **User messaging**: Implementations may display errors like _“Invalid parameters”_ (mobile) or _“Unsupported link”_ (desktop) for invalid combinations.

---

## Other Deep Links

These actions keep the same `{PREFIX}` semantics.

### Buy TON

```text
{PREFIX}buy-ton
```

Opens the on‑ramp flow.

### Staking

```text
{PREFIX}staking
```

Opens the staking screen to stake/unstake TON.

### Pool

```text
{PREFIX}pool/{ADDRESS}
```

Opens a specific liquidity pool. `{ADDRESS}` — pool address.

### Exchange

```text
{PREFIX}exchange?provider={PROVIDER}&toToken={TO_TOKEN}
```

- `provider` (required) — exchange provider ID (e.g., `mercurio`).
- `toToken` (optional) — token to take.

### Swap

```text
{PREFIX}swap?fromToken={FROM_TOKEN}&toToken={TO_TOKEN}
```

Opens the swap interface.

### Battery

```text
{PREFIX}battery?promocode={PROMOCODE}
```

Opens the battery screen (optional `promocode`).

### Action

```text
{PREFIX}action?eventId={EVENT_ID}
```

Opens the transaction bottom sheet for `eventId`.

### DApp

```text
{PREFIX}dapp/{DAPP_URL}
```

Opens the in‑app browser with a DApp from the built‑in catalog. Only **https** is supported.

### TON Connect

See the official TON Connect universal link reference: https://github.com/ton-blockchain/ton-connect/blob/main/bridge.md#universal-link

---

## Standard Reference

The `ton://` scheme is part of the broader TON standard. See https://docs.ton.org/ for details.

---

## Example Workflows

- **Quick Payments** — payment requests from your website; users complete with one tap using any supported scheme.
- **In‑app Transactions** — deep link from your UI into Tonkeeper’s Send screen with all fields prefilled.
- **Cross‑Wallet Compatibility** — favor `ton://` when you want other wallets to understand your links.
