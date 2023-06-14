import type { AppProps } from "next/app";
import { GlobalStyled } from "@/styled-components/Global.Styled";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  );
}
