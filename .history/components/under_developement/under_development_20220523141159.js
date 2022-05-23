import react from "react";
import styles from "./under_development.module.css";

export default function UnderDevelopmentComponent() {
  return (
    <div>
      <div className={styles.section}>
        <div>
          <h1 className={styles.left}>Under development</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.inner}></div>
        </div>
      </div>
    </div>
  );
}
