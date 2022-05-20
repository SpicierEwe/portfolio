import Head from "next/head";
import Image from "next/image";
import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>hiii</Head>
      <body>
        <LandingPage></LandingPage>
      </body>
    </div>
  );
}
