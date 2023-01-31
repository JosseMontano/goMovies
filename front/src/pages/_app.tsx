import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StyledJsxRegistry from "./registry";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledJsxRegistry>
      <Component {...pageProps} />
    </StyledJsxRegistry>
  );
}
