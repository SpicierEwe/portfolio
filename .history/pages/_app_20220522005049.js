import MobileNavBar from "../components/navBar/mobile_nav/mobile_nav_bar";
import { MobileNavContextProvider } from "../providers/context_provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MobileNavContextProvider>
      <MobileNavBar> </MobileNavBar>
      <Component {...pageProps} />
    </MobileNavContextProvider>
  );
}

export default MyApp;
