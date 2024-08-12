export const LINKS = {
  GITHUB: "https://github.com/tonkeeper",
  TELEGRAM_CHANNEL: "https://t.me/tonkeeper",
  TERMS: "#",
  PRIVACY: "#",
  SUPPORT: "https://t.me/tonrostislav",
  CONTACT: "https://t.me/tonrostislav",
  CONSOLE: "https://tonconsole.com",
} as const;

export const SWAGGER_TAGS = {
  BLOCKCHAIN: "Blockchain",
  GASLESS: "Gasless",
} as const;

export const SWAGGER_LINKS = Object.keys(SWAGGER_TAGS).reduce((acc, key) => {
  acc[key] = `${process.env.NEXT_PUBLIC_TONAPI_LANDING_PAGE_URL}/api-v2#operations-tag-${
    SWAGGER_TAGS[key as keyof typeof SWAGGER_TAGS]
  }`;
  return acc;
}, {} as { [key: string]: string });
