import { ProjectdataProvider } from "../providers/projects_provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProjectdataProvider>
      <Component {...pageProps} />
    </ProjectdataProvider>
  );
}

export default MyApp;
