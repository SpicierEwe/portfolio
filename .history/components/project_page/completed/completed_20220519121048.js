import React from "react";
import { useContext } from "react";
import ProjectContext from "../../../providers/projects_provider";

import styles from "./completed.module.css";

function Completed(props) {
  const { distributeData, future, current } = useContext(ProjectContext);
  console.log(current);
  console.log("im completed");
  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.category}>Completed</h2>
      </header>
      <section></section>
    </div>
  );
}

export default Completed;
