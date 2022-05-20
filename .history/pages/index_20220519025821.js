import Head from "next/head";
import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";
import ProjectsPage from "../components/project_page/project_page";
import { useContext, useState } from "react";
import ProjectContext from "../providers/projects_provider";

export default function Home(props) {
  // send fetchedproject data to provider here
  const ProjectCtx = useContext(ProjectContext);

  // ProjectCtx.distributeData(props.projects_data);
  const [a, seta] = useState();
  ProjectCtx.distributeData(a);
  seta(props.projects_data);

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
export async function getStaticProps(context) {
  const url =
    "https://se-portfolio-db-default-rtdb.firebaseio.com/my_projects.json";
  const project_data = await fetch(url).then((response) => response.json());

  return {
    props: { project_data }, // will be passed to the page component as props
  };
}
