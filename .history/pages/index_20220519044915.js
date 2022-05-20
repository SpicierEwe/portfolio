import Head from "next/head";
import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";
import ProjectsPage from "../components/project_page/project_page";
import { useContext, useEffect } from "react";
import ProjectContext from "../providers/projects_provider";
import { useState } from "react";

export default function Home(props) {
  const { distributeData, projects_data } = useContext(ProjectContext);
  // const [a, seta] = useState("hiiii");

  distributeData(props.projects_data);

  // console.log(props.project_data);

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
