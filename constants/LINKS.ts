export const LINKS = {
  GITHUB: "https://github.com/tonkeeper",
  TELEGRAM_CHANNEL: "https://t.me/tonkeeper",
  TERMS: "#",
  PRIVACY: "#",
  SUPPORT: "https://t.me/tonrostislav",
  CONTACT: "https://t.me/tonrostislav",
  CONSOLE: "https://tonconsole.com",
} as const;

export const GITHUB_LINKS = {
  CNFT_SMART_CONTRACT:
    "https://github.com/ton-community/compressed-nft-contract",
} as const;

export const SWAGGER_SCHEMA_JSON_URL =
  process.env.NEXT_PUBLIC_TONAPI_OPENAPI_JSON_URL;
export const TONAPI_LANDING_PAGE_URL =
  process.env.NEXT_PUBLIC_TONAPI_LANDING_PAGE_URL;

export const SWAGGER_TAGS = {
  BLOCKCHAIN: "Blockchain",
  GASLESS: "Gasless",
  NFT: "NFT",
  ACCOUNTS: "Accounts",
} as const;
