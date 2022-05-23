import react from "react";
import styles from "./under_development.module.css";
import { FaTools } from "react-icons/fa";

export default function UnderDevelopmentComponent() {
  return (
    <div>
      <div className={styles.section}>
        <div>
          <h1 className={styles.left}>Under development</h1>
          <h1 className={styles.left}>will inshallah be available soon</h1>
        </div>
        <div className={styles.right}>
          <div className={styles.outer}>
            <div className={styles.inner}>
              <FaTools className={styles.tools_icon}></FaTools>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
