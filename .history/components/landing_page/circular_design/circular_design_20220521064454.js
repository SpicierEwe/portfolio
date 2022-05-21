import React from "react";

import styles from "./circular_design.module.css";

export default function CircularDesign() {
  return (
    <div>
      <div className={styles.outer_circle}>
        <div>
          <div className={styles.inner_circle}>
        </div>
      </div>
    </div>
  );
}
