import React from "react";
import { useContext } from "react";
import ProjectContext from "../../../providers/projects_provider";

import styles from "./completed.module.css";

function Completed(props) {
  const { completed } = useContext(ProjectContext);
  const data = completed;

  // var project_title = data["project_title"];
  // var project_dis = data["project_description"];
  // var project_image = data["project_image_url"];

  // console.log(project_title);
  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.category}>Completed</h2>
      </header>
      <section>
        {/* <h1>{project_title}</h1>
        <h1>{project_dis}</h1> */}
        {data.map((project) => {
          <div>{project["project_title"]}</div>;
        })}
      </section>
    </div>
  );
}

export default Completed;
