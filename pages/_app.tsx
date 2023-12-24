import Head from "next/head";
import Script from "next/script";
import { SSRProvider } from "@react-aria/ssr";
import "../styles.css";
import "nextra-theme-docs/style.css";
import "../custom.css";

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SSRProvider>
      <Head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </SSRProvider>
  );
}
