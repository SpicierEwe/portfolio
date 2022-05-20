import React from "react";
import styles from "./completed.module.css";
import store from "../../../providers/store";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Completed(props) {
  var completed = store.getState().projectData["completed_projects"];
  // console.log(completed);

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.category}>Completed</h2>
      </header>
      <section>
        <div className={styles.grid_container}>
          {completed.map((project, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: getRandomColor() }}
                className={styles.grid_item}
              >
                <h3>{project["project_description"]}</h3>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Completed;
