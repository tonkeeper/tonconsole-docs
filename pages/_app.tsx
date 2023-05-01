import "../styles.css";
import "nextra-theme-docs/style.css";


export default function Nextra({ Component, pageProps }: {Component: any, pageProps: any}) {
    const getLayout = Component.getLayout || ((page: any) => page);
    return getLayout(<Component {...pageProps} />);
}
