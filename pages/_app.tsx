import type { AppProps } from "next/app";
import { GlobalStyled } from "@/styled-components/Global.Styled";
import Head from "next/head";
import Header from "@/components/Header";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyled />
      <Header setMenu={setMenu} menu={menu} />
      <Component {...pageProps} />
    </>
  );
}
