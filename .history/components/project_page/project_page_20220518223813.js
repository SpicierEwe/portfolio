import React from "react";
import styles from "./project_page.module.css";

import Current from "./current/current";

function ProjectsPage(props) {
  return (
    <div>
      <div className={styles.projects_bg}>
        <section className={styles.section}>
          <div>
            <h2 className={styles.title}>My Projects</h2>
            <p className={styles.dis}>
              Here are some of my projects. The Current ones, The Completed ones
              and inshallah the Future ones. If you have new Idea i&apos;m
              alhamdulillah always open to then so Contact me
            </p>
          </div>
        </section>

        {/* <ProjectNavBar
          item1={{ name: "CURRENT", link: "#" }}
          item2={{ name: "FUTURE", link: "#" }}
          item3={{ name: "COMPLETED", link: "#" }}
        /> */}

        {/* <div className={styles.sized_box}></div> */}
        <Current></Current>
      </div>
    </div>
  );
}

export default ProjectsPage;
