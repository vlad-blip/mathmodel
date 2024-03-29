import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
