import React from "react";

import styles from "./current.module.css";

function Current(props) {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.current_project_info}>
          <h3>ahadith Collection</h3>
        </div>
        <div className={styles.current_project_logo}>
          <h3>ahadith Collection</h3>
        </div>
      </section>
    </div>
  );
}

export default Current;
