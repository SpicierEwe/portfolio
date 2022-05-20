import React from "react";

import styles from "./current.module.css";

function Current(props) {
  return (
    <div>
      <section>
        <card className={styles.card}>
          <h3>Current</h3>
        </card>
      </section>
    </div>
  );
}

export default Current;
