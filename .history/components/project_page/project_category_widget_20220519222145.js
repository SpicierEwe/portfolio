import react from "react";
import store from "../../../../providers/store";
import styles from "./future.module.css";

function ProjectCategoryWidget(props) {
  const future = store.getState().projectData["future_projects"];
  //   console.log(future);
  return (
    <div>
      <div>
        <header className={styles.header}>
          <h2 className={styles.category}>Completed</h2>
        </header>
      </div>
    </div>
  );
}

export default ProjectCategoryWidget;
