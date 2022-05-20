import React from "react";
import styles from "./completed.module.css";
import store from "../../../store";

function Completed(props) {
  var completed = store.getState().project.completed;
  const data = completed.map((item, index) => {

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
