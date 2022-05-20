import React from "react";
import Fragment from "react";
import styles from "./landing_page.module.css";

function LandingPage() {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.dev_name}>
          Hi i&apos;m <br></br>SpicierEwe,<br></br> a Software developer
        </h1>
        <p className={styles.dev_info}>
          Full Stack Developer / Android / iOS / Mac / Windows
        </p>
        <div className={styles.btns_container}>
          <button className={styles.btn_contact}>Contact me !</button>
          <p className={styles.btn_projects}>Projects</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
