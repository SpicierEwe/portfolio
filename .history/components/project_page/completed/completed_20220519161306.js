import React from "react";
import styles from "./completed.module.css";
import store from "../../../providers/store";

function Completed(props) {
  var completed = store.getState().projectData["completed_projects"];
  console.log(completed);

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.category}>Completed</h2>
      </header>
      <section>
        {completed.map((project, index) => {
          return (
            <div key={index} className={styles.grid_container}>
              <div className={styles.grid_container}>
                <h3>{project["project_description"]}</h3>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Completed;
