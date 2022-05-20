import Head from "next/head";
import Image from "next/image";

import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navBar/nav_bar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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
