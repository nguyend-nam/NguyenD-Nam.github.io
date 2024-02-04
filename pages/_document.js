import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../constants";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="/favicon.ico" rel="icon" />
        <meta content={theme.colors.grey} name="theme-color" />
        <meta content="/og.png" property="og:image" />
        <meta content="https://ngdnam.netlify.app" property="og:url" />
        <meta content="Nam Nguyen" property="og:site_name" />
        <meta content="Nam Nguyen" property="og:title" />
        <meta
          content="Welcome to my personal website"
          property="og:description"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
