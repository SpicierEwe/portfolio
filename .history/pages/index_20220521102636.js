import Head from "next/head";
import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";
import ProjectsPage from "../components/project_page/project_page";
import store from "../providers/store";
import MobileNavBar from "../components/navBar/mobile_nav/mobile_nav_bar";
export default function Home(props) {
  //

  store.dispatch({
    type: "setProjectData",
    payload: {
      data: props.data,
    },
  });

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
export async function getStaticProps(context) {
  const url =
    "https://se-portfolio-db-default-rtdb.firebaseio.com/my_projects.json";
  const project_data = await fetch(url).then((response) => response.json());
  const current = project_data["current_projects"][0];
  const future = project_data["future_projects"];
  const completed = project_data["completed_projects"];

  return {
    props: {
      current: current,
      future: future,
      completed: completed,
      data: project_data,
    }, // will be passed to the page component as props
  };
}
