import Head from "next/head";
import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";
import ProjectsPage from "../components/project_page/project_page";

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
  const url =
    "https://se-portfolio-db-default-rtdb.firebaseio.com/my_projects.json";
  const x = await fetch(url, { method: "GET" }).then((data) =>
    JSON.parse(data)
  );

  console.log(x);

  return {
    props: {}, // will be passed to the page component as props
  };
}
