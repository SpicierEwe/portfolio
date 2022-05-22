import MobileNavBar from "../components/navBar/mobile_nav/mobile_nav_bar";
import NavBar from "../components/navBar/nav_bar";
import { MobileNavContextProvider } from "../providers/context_provider";
import { ThemeContextProvider } from "../providers/theme_provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <MobileNavContextProvider>
        <MobileNavBar> </MobileNavBar>
        <NavBar></NavBar>
        <Component {...pageProps} />
      </MobileNavContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
