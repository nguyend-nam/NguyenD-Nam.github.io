import { Html, Head, Main, NextScript } from "next/document";
import { theme } from "../constants";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={theme.colors.primary} />
        <meta property="og:image" content="/og.png" />
        <meta property="og:url" content="https://ngdnam.netlify.app" />
        <meta property="og:site_name" content="Nam Nguyen" />
        <meta property="og:title" content="Nam Nguyen" />
        <meta
          property="og:description"
          content="Welcome to my personal website"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
