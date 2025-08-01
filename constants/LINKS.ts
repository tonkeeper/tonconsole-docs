export const LINKS = {
  GITHUB: 'https://github.com/tonkeeper',
  TELEGRAM_CHANNEL: 'https://t.me/tonconsole_com',
  TERMS: "https://tonapi.io/terms",
  // PRIVACY: "#", // TODO: Add link
  SUPPORT: 'https://t.me/ton_console_bot',
  CONTACT: 'https://t.me/tonrostislav',
  CONTACT_EMAIL: 'rostislav.r@tonkeeper.com',
  ZAKHAR_TG: 'https://t.me/zakhar_petukhov',
  CONSOLE: 'https://tonconsole.com',
  TONAPI_TECH_CHAT: 'https://t.me/tonapi_chat',
} as const;

export const TONORG_LINKS = {
  TONDNS_ABOUT: 'https://dns.ton.org/about.html',
  TONCONNECT_ABOUT: 'https://docs.ton.org/develop/dapps/ton-connect/overview',
  TONCONNECT_MANIFEST:
    'https://docs.ton.org/develop/dapps/ton-connect/protocol/requests-responses#app-manifest',
} as const;

export const CONSOLE_LINKS = {
  TONKEEPER_MESSAGES: `${LINKS.CONSOLE}/tonkeeper-messages`,
  CNFT: `${LINKS.CONSOLE}/nft/cnft`,
} as const;

export const GITHUB_LINKS = {
  CNFT_SMART_CONTRACT: 'https://github.com/ton-community/compressed-nft-contract',
  W5_SPECIFICATION: 'https://github.com/tonkeeper/w5/blob/main/Specification.md',
  RATES_PRICE_CALCULATION_CODE: 'https://github.com/tonkeeper/opentonapi/blob/master/pkg/rates/market.go#L724',
} as const;

export const SWAGGER_SCHEMA_JSON_URL =
  process.env.NEXT_PUBLIC_TONAPI_OPENAPI_JSON_URL ??
  'https://raw.githubusercontent.com/tonkeeper/opentonapi/master/api/openapi.json';
export const SWAGGER_SCHEMA_YAML_URL =
  process.env.NEXT_PUBLIC_TONAPI_OPENAPI_YAML_URL ??
  'https://raw.githubusercontent.com/tonkeeper/opentonapi/master/api/openapi.yml';
export const TONAPI_LANDING_PAGE_URL =
  process.env.NEXT_PUBLIC_TONAPI_LANDING_PAGE_URL ?? 'https://tonapi.io/';

export const TONAPI_LANDING_PAGE_SWAGGER_URL = `${TONAPI_LANDING_PAGE_URL}/api-v2`;
