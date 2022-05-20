import React from "react";

import styles from "./current.module.css";

function Current(props) {
  return (
    <div>
      <section>
        <div className={styles.card}>
          <h3>Current</h3>
        </div>
      </section>
    </div>
  );
}

export default Current;
