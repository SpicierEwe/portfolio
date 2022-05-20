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
              Here are some of my projects. I have worked on a few of them, but
              I am always open to new ideas. If you have an idea for a project,
              please contact me.
            </p>
          </div>
        </section>

        {/* <ProjectNavBar
          item1={{ name: "CURRENT", link: "#" }}
          item2={{ name: "FUTURE", link: "#" }}
          item3={{ name: "COMPLETED", link: "#" }}
        /> */}

        <div className={styles.sized_box}></div>
        <Current></Current>
      </div>
    </div>
  );
}

export default ProjectsPage;
