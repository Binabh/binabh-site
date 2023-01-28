import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css"
      ></link>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
