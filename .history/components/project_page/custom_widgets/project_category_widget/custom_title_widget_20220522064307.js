import react from "react";

import styles from "./custom_title_widget.module.css";

function CustomTitleWidget({ projectCategoty: title }) {
  return (
    <div>
      <div>
        <header className={styles.header}>
          <h2 className={styles.category}>{title}</h2>
        </header>
      </div>
    </div>
  );
}

export default CustomTitleWidget;
