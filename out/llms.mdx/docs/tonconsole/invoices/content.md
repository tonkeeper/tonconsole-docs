# GRAM Payment tracker (/tonconsole/invoices)

The service provides tools for tracking specific transactions in the blockchain. It supports GRAM and USDT, allowing users to monitor the status of payments and receive updates about transaction changes through webhooks.

## Getting Started [#getting-started]

To start using the GRAM Invoicing Service, follow these steps:

<Steps>

<Step>

### Step 1: Register on Tonconsole [#step-1-register-on-tonconsole]

Visit [TON Console](https://tonconsole.com/) and create an account.

</Step>

<Step>

### Step 2: Send Project ID [#step-2-send-project-id]  

Find your `Project ID` on the [project settings](https://tonconsole.com/settings/edit-project) page and submit it via [this form](https://forms.gle/trMwmQv6YukduwKm6).

</Step>

<Step>

### Step 3: Verification [#step-3-verification]

Once your Project ID is verified, you will gain access to the invoicing service.

</Step>

<Step>

### Step 4: Register Your Application [#step-4-register-your-application]

To begin using the invoicing service, you must register your application through **Tonconsole**.

During registration, you need to specify the payment recipient's TON wallet address. This address will be used to receive all incoming invoice payments.

> **Note:** The recipient wallet must have at least one outgoing transaction on the TON blockchain to be eligible.

If the wallet is new, **activate it by sending a small amount (e.g., `0.01 GRAM`) *from this wallet to any other address***.

</Step>

</Steps>

### Managing Applications [#managing-applications]

Once access is granted:

1. An `API token` will be created automatically.
2. Use the [TON Console](https://tonconsole.com/) for UI or API to manage invoices (create, delete, view).
3. Register a webhook on the [Overview page](https://tonconsole.com/invoices/dashboard) to handle invoice status changes.

---

### Payment Creation [#payment-creation]

<Steps>

<Step>

### Step 1: User Initiates Payment [#step-1-user-initiates-payment]
A user starts the payment process on your website. The frontend sends a request to your backend to create an invoice.

</Step>

<Step>

### Step 2: Create an Invoice [#step-2-create-an-invoice]
Your backend makes an API request to Tonconsole using the API token.  

```bash
curl -X POST https://tonconsole.com/api/v1/services/invoices/invoice \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <YOUR_API_TOKEN>' \
  -d '{"amount": "1000000", "life_time": 1800, "currency": "USDT", "description": "Example description"}'
```

**Parameters:**
- `amount`: Amount in minimal indivisible units (1/1000000000 for GRAM and 1/1000000 for USDT).
- `life_time`: Invoice lifetime in seconds.
- `currency`: Currency code (GRAM or USDT).
- `description` (optional): Service-specific description visible only to you in the Tonconsole interface.

</Step>

<Step>

### Step 3: Handle API Response [#step-3-handle-api-response]
Tonconsole returns a response with the invoice details, including a `payment_link`. Send this link to your frontend, where it can be used in a "Pay with Keeper" button or as a QR code.

**Response Example:**
```json
{
  "id": "string",
  "status": "pending",
  "amount": "string",
  "description": "string",
  "date_create": 1234567890,
  "date_expire": 1234567890,
  "payment_link": "string",
  "pay_to_address": "0:<hash>"
}
```

</Step>

<Step>

### Step 4: Monitor Invoice Status [#step-4-monitor-invoice-status]
Register a webhook to receive updates about invoice status changes. Tonconsole will send a POST request to your webhook whenever the status updates (e.g., from "pending" to "paid"). This ensures real-time tracking of payments.

</Step>

</Steps>

---

### Webhook for Updates [#webhook-for-updates]

Use a webhook to monitor changes in invoice status. A webhook is a mechanism where Tonconsole sends a POST request to your server whenever an invoice status changes (e.g., from "pending" to "paid").

Here’s how you can handle webhooks on your server:

#### Example of Webhook Handling (Node.js with Express): [#example-of-webhook-handling-nodejs-with-express]

```javascript filename="server.js"
const express = require('express');
const app = express();

// Define the webhook endpoint
app.post('/tonconsole-webhooks', (req, res) => {
  try {
    // Parse and log the incoming webhook payload
    const webhookPayload = JSON.parse(req.body);
    console.log('Webhook received:', webhookPayload);

    // Respond with a success status to acknowledge the webhook
    res.status(200).send('Webhook received');
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Webhook server is running on port 3000');
});
```

#### Webhook Payload: [#webhook-payload]

**Payload type**

```typescript
interface Invoice {
    id: string;
    status: 'pending' | 'paid' | 'cancelled' | 'expired';
    amount: string;
    description?: string;
    date_create: number;
    date_expire: number;
    date_change: number;
    payment_link: string;
    pay_to_address: string;
    paid_by_address?: string;
    overpayment?: string;
}
```

**Payload example**

```json
{
  "id": "string",
  "status": "pending | paid | cancelled | expired",
  "amount": "string",
  "description": "string",
  "date_create": 1234567890,
  "date_expire": 1234567890,
  "date_change": 1234567890,
  "payment_link": "string",
  "pay_to_address": "0:<hash>",
  "paid_by_address": "0:<hash>",
  "overpayment": "string"
}
```

---

#### Explanation: [#explanation]

1. **`/tonconsole-webhooks`:** Replace this path with your desired endpoint URL.
3. **Webhook Payload:** This is the structure of the data Tonconsole will send to your endpoint whenever an invoice's status changes.
4. **Logging and Acknowledgement:** Always log the payload and respond with a `200` status to indicate successful receipt.

Here is an example of how this can be implemented on your side.

---

## Invoice Management [#invoice-management]

### Fetching Invoice by ID [#fetching-invoice-by-id]

**Request:**

```bash
GET https://tonconsole.com/api/v1/services/invoices/<invoice_id>?api_key=<API_KEY>
```

**Response:**

```json
{
  "id": "string",
  "status": "pending | paid | cancelled | expired",
  "amount": "string",
  "description": "string",
  "date_create": 1234567890,
  "date_expire": 1234567890,
  "date_change": 1234567890,
  "payment_link": "string",
  "pay_to_address": "0:<hash>",
  "paid_by_address": "0:<hash>",
  "overpayment": "string"
}
```

### Authentication [#authentication]

Authenticate using either:

- Query parameter: `api_key=<API_KEY>`.
- Header: `Authorization: Bearer <API_KEY>`.

---

## Important Details [#important-details]

### Invoice Lifetime [#invoice-lifetime]

- Ensure the invoice `life_time` is appropriately set.
- Warn users about expiration and block expired payments in your interface.

### Overpayment [#overpayment]

Overpayment, while uncommon, can occur in specific scenarios. When it happens, Tonconsole will notify you about the overpayment through webhooks or the user interface. The `overpayment` field in the invoice data reflects the following cases:

- **Payments to expired or canceled invoices**  
  The `overpayment` field will equal the full amount paid by the user.

- **Payments exceeding the required amount**  
  The `overpayment` field will represent the difference between the amount paid and the invoice's required amount.

Since Tonconsole focuses solely on tracking transactions and does not process payments directly, handling refunds or adjustments for overpayments will need to be managed on your side. To address such cases, you can use the access credentials to your account holding the funds to implement the necessary refund mechanisms.

This approach ensures you retain full control over your funds while Tonconsole provides reliable real-time monitoring and reporting capabilities.

## Tonconsole UI Features [#tonconsole-ui-features]

- **Manual Invoice Creation** *(Use the form to create invoices manually)*

- **Invoice Management** *(View and manage invoices in the table)*

- **Statistics** *(Analyze invoice data using built-in statistics tools)*
