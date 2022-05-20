import react from "react";

import styles from "./project_category_widget.module.css";

function ProjectCategoryWidget(@require { projectCategoty }) {
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
