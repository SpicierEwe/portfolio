import Head from "next/head";
import Image from "next/image";
import AppBar from "../components/";
import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBar></AppBar>
        <LandingPage></LandingPage>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
