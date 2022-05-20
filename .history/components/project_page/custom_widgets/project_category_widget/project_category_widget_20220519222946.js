import react from "react";

import styles from "..project_category_widget/project_category_widget.module.css";

function ProjectCategoryWidget({ projectCategoty }) {
  return (
    <div>
      <div>
        <header className={styles.header}>
          <h2 className={styles.category}>{projectCategoty}</h2>
        </header>
      </div>
    </div>
  );
}

export default ProjectCategoryWidget;
