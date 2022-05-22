import react from "react";

import styles from "./custom_title_widget.module.css";

function CustomTitleWidget({ projectCategoty }) {
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

export default CustomTitleWidget;
