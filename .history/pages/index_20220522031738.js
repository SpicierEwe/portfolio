import Head from "next/head";
import LandingPage from "../components/landing_page/landing_page";
import styles from "../styles/Home.module.css";
import ProjectsPage from "../components/project_page/project_page";
import store from "../providers/store";
import MobileNavBar from "../components/navBar/mobile_nav/mobile_nav_bar";
import NavBar from "../components/navBar/nav_bar";
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
      <MobileNavBar> </MobileNavBar>
      <main>
        <LandingPage></LandingPage>
        <ProjectsPage></ProjectsPage>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
export async function getStaticProps(context) {
  console.log(context.prams);

  return {
    props: {}, // will be passed to the page component as props
  };
}
