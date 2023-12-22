import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import "../styles.css";
import "nextra-theme-docs/style.css";
import "../custom.css";

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SSRProvider>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </script>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </SSRProvider>
  );
}
