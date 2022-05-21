import React from "react";
import Fragment from "react";
import styles from "./landing_page.module.css";
import NavBar from "../navBar/nav_bar";
import CircularDesign from "./circular_design/circular_design";

function LandingPage() {
  const dev_info = "Full Stack Developer / Android / iOS / Mac / Windows";
  return (
    <div>
      <section className={styles.section}>
        {/* Nav bar is here */}
        <NavBar></NavBar>
        {/* 
        flexing the dev info on left and the decoration image on right
        */}
        <div className={styles.flex_content}>
          {/* 
         =========================== left
          */}
          <div className={styles.left}>
            <div className={styles.dev_intro_container}>
              {/* 
        main content */}
              {/* dev name is here */}
              <h1 className={styles.dev_name}>
                Hi i&apos;m <br></br>SpicierEwe,<br></br> a Software developer
              </h1>
              {/* dev info is here */}
              <p className={styles.dev_info}>{dev_info}</p>
              <div className={styles.btns_container}>
                <button className={`${styles.btn}  ${styles.btn_contact}`}>
                  Contact me
                </button>
                <a className={`${styles.btn}  ${styles.btn_projects}`}>
                  / A \ bout Me
                </a>
              </div>
            </div>
          </div>
          {/* 
          ================================= right
           */}
          <div className={styles.right}>
            <CircularDesign></CircularDesign>
          </div>
        </div>
      </section>
      <div className={styles.sized_box}></div>
    </div>
  );
}

export default LandingPage;
