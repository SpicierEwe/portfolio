import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MobileNavContextProvider>
      <Component {...pageProps} />{" "}
    </MobileNavContextProvider>
  );
}

export default MyApp;
