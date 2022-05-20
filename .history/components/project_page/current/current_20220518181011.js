import React from "react";

import styles from "./current.module.css";

function Current(props) {
  const project_title = "ahadith Collection";
  const project_dis = "li";
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.current_project_info}>
          <h3>{project_title}</h3>
          <h3>{project_dis}</h3>
        </div>
        <div className={styles.current_project_logo}>
          <h3>icon</h3>
        </div>
      </section>
    </div>
  );
}

export default Current;
