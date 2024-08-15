export const LINKS = {
  GITHUB: "https://github.com/tonkeeper",
  TELEGRAM_CHANNEL: "https://t.me/tonkeeper",
  TERMS: "#", // TODO: Add link
  PRIVACY: "#", // TODO: Add link
  SUPPORT: "https://t.me/tonrostislav",
  CONTACT: "https://t.me/tonrostislav",
  CONSOLE: "https://tonconsole.com",
} as const;

export const TONORG_LINKS = {
  TONDNS_ABOUT: "https://dns.ton.org/about.html",
  TONCONNECT_ABOUT: "https://docs.ton.org/develop/dapps/ton-connect/overview",
  TONCONNECT_MANIFEST: "https://docs.ton.org/develop/dapps/ton-connect/protocol/requests-responses#app-manifest",
} as const;

export const CONSOLE_LINKS = {
  TONKEEPER_MESSAGES: `${LINKS.CONSOLE}/tonkeeper-messages`,
  CNFT: `${LINKS.CONSOLE}/nft/cnft`,
} as const;

export const GITHUB_LINKS = {
  CNFT_SMART_CONTRACT:
    "https://github.com/ton-community/compressed-nft-contract",
  W5_SPECIFICATION: "https://github.com/tonkeeper/w5/blob/main/Specification.md"
} as const;

export const SWAGGER_SCHEMA_JSON_URL =
  process.env.NEXT_PUBLIC_TONAPI_OPENAPI_JSON_URL;
export const SWAGGER_SCHEMA_YAML_URL =
  process.env.NEXT_PUBLIC_TONAPI_OPENAPI_YANL_URL;
export const TONAPI_LANDING_PAGE_URL =
  process.env.NEXT_PUBLIC_TONAPI_LANDING_PAGE_URL;

export const TONAPI_LANDING_PAGE_SWAGGER_URL = `${TONAPI_LANDING_PAGE_URL}/api-v2`;
