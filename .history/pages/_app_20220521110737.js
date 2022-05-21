import { MobileNavContextProvider } from "../providers/context_provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MobileNavContextProvider>
      <Component {...pageProps} />
    </MobileNavContextProvider>
  );
}

export default MyApp;
