import React from "react";
import { useContext } from "react";
import ProjectContext from "../../../providers/projects_provider";

import styles from "./completed.module.css";

function Completed(props) {
  const { completed } = useContext(ProjectContext);
  const projectdata = completed;

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.category}>Completed</h2>
      </header>
      <section>
        {/* <h1>{data[0]["project_title"]}</h1> */}
        {data.forEach((element) => {
          <h1>{toString(element["project_title"])}</h1>;
        })}
      </section>
    </div>
  );
}

export default Completed;
