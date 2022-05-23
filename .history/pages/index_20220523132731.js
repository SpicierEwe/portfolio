import Head from "next/head";
import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";
import ProjectsPage from "../components/project_page/project_page";
import MobileNavBar from "../components/navBar/mobile_nav/mobile_nav_bar";
import NavBar from "../components/navBar/nav_bar";
export default function Home(props) {
  //

  return (
    <div>
      <Head>
        <title>abeliever</title>
        <meta name="description" content="SpicierEwe's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LandingPage></LandingPage>
        <ProjectsPage></ProjectsPage>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
