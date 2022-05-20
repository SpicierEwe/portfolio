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

        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        {/* fonts */}
      </Head>

      <main>
        <NavBar></NavBar>
        <LandingPage></LandingPage>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
