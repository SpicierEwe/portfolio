import React from "react";
import Fragment from "react";
import styles from "./landing_page.module.css";
import NavBar from "../navBar/nav_bar";

function LandingPage() {
  const dev_info = "Full Stack Developer / Android / iOS / Mac / Windows";
  return (
    <div>
      <section className={styles.section}>
        {/* Nav bar is here */}
        <NavBar></NavBar>

        {/* 
        main content */}
        <h1 className={styles.dev_name}>
          Hi i&apos;m <br></br>SpicierEwe,<br></br> a Software developer
        </h1>
        <p className={styles.dev_info}>
          Full Stack Developer / Android / iOS / Mac / Windows
        </p>
        <div className={styles.btns_container}>
          <button className={`${styles.btn}  ${styles.btn_contact}`}>
            Contact me !
          </button>
          <a className={`${styles.btn}  ${styles.btn_projects}`}>Projects</a>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
