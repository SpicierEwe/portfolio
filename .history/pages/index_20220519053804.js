import Head from "next/head";
import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";
import ProjectsPage from "../components/project_page/project_page";
import { useContext, useEffect } from "react";
import ProjectContext from "../providers/projects_provider";
import { useState } from "react";

export default function Home(props) {
  const { distributeData } = useContext(ProjectContext);
  distributeData(props.current, props.future, props.completed);

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
  const project_data = await fetch(url).then((response) => response.json());
  const current = project_data["current_projects"][0];
  const future = project_data["future_projects"][0];
  const completed = project_data["completed_projects"][0];

  return {
    props: { current: current, future: future, completed: completed }, // will be passed to the page component as props
  };
}
