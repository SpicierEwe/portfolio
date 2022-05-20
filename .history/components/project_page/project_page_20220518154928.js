import React from "react";
import styles from "./project_page.module.css";

function ProjectsPage(props) {
  return (
    <div>
      <section className={styles.section}>
        <div>
          <h2 className={styles.title}>My Projects</h2>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
