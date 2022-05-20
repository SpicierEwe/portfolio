import React from "react";
import styles from "./completed.module.css";
import store from "../../../store";
import reducer from "../../../reducers/project_page/completed/completed.reducer";

function Completed(props) {
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
