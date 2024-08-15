export const LINKS = {
  GITHUB: "https://github.com/tonkeeper",
  TELEGRAM_CHANNEL: "https://t.me/tonkeeper",
  TERMS: "#",
  PRIVACY: "#",
  SUPPORT: "https://t.me/tonrostislav",
  CONTACT: "https://t.me/tonrostislav",
  CONSOLE: "https://tonconsole.com",
  TONDNS_ABOUT: "https://dns.ton.org/about.html"
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

export const SWAGGER_TAGS = {
  ACCOUNTS: "Accounts",
  NFT: "NFT",
  JETTONS: "Jettons",
  RATES: "Rates",
  DNS: "DNS",
  GASLESS: "Gasless",
  STAKING: "Staking",
  EVENTS: "Events",
  TRACES: "Traces",
  EMULATION: "Emulation",
  WALLET: "Wallet",
  INSCRIPTIONS: "Inscriptions",
  STORAGE: "Storage",
  CONNECT: "Connect",
  MULTISIG: "Multisig",
  BLOCKCHAIN: "Blockchain",
  LITE_SERVER: "Lite Server"
} as const;
