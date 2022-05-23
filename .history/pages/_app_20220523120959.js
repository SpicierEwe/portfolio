import MobileNavBar from "../components/navBar/mobile_nav/mobile_nav_bar";
import NavBar from "../components/navBar/nav_bar";
import { MobileNavContextProvider } from "../providers/context_provider";
import { ThemeContextProvider } from "../providers/theme_provider";
import "../styles/globals.css";

import { DataContextProvider } from "../providers/data_provider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <DataContextProvider>
        <MobileNavContextProvider>
          <MobileNavBar> </MobileNavBar>
          <NavBar></NavBar>
          <Component {...pageProps} />
        </MobileNavContextProvider>
      </DataContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
