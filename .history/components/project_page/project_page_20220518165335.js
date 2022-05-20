import React from "react";
import styles from "./project_page.module.css";
import NavBar from "../../components/navBar/nav_bar";

function ProjectsPage(props) {
  return (
    <div>
      <section className={styles.section}>
        <div>
          <h2 className={styles.title}>My Projects</h2>
          <p>
            Here are some of my projects. I have worked on a few of them, but I
            am always open to new ideas. If you have an idea for a project,
            please contact me.
          </p>
        </div>
        <NavBar
          item1={{ name: "PROJECTS", link: "#" }}
          item2={{ name: "PROJECTS", link: "#" }}
          item3={{ name: "PROJECTS", link: "#" }}
        />
      </section>
    </div>
  );
}

export default ProjectsPage;
