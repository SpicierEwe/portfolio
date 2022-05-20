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
              and inshallah the Future ones.<br></br> i&apos;m always open to
              new ideas contact me if you have any.
            </p>
          </div>
        </section>

        <Current></Current>
      </div>
    </div>
  );
}

export default ProjectsPage;
