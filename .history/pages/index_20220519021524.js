import Head from "next/head";
import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";
import ProjectsPage from "../components/project_page/project_page";
import { getURL } from "next/dist/shared/lib/utils";

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
export async function getStaticProps(context) {
  const url = await getURL(
    "https://se-portfolio-db-default-rtdb.firebaseio.com/my_projects.json"
  );
  // const x = await fetch(url, { method: "GET" }).then((data) => data);

  console.log(url);

  return {
    props: {}, // will be passed to the page component as props
  };
}
