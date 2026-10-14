# Traces (/tonapi/rest-api/traces)

[Open in Swagger UI](https://tonapi.io/api-v2#operations-tag-Traces)

**Traces** service provides access to low-level transaction traces on the TON blockchain. This service enables retrieval of detailed information about individual transactions, including input and output data, gas usage, and execution status. Traces are essential for debugging and analyzing blockchain interactions, as they provide a detailed view of the transaction lifecycle.

## Operations [#operations]


- [`getTrace`](https://tonapi.io/api-v2#operations-Traces-getTrace) — Get the trace by trace ID or hash of any transaction in trace
- [`emulateMessageToTrace`](https://tonapi.io/api-v2#operations-Traces-emulateMessageToTrace) — Emulate sending message to retrieve with a detailed execution trace
