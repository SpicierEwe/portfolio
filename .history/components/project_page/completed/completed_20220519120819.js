import React from "react";
import { useContext } from "react/cjs/react.production.min";
import ProjectContext from "../../../providers/projects_provider";

import styles from "./completed.module.css";

function Completed(props) {
  const { distributeData, future } = useContext(ProjectContext);
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
