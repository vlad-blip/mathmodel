import "@/styles/globals.scss";
import type { AppProps } from "next/app";

import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import { AuthContextProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthContextProvider>
    </>
  );
}
