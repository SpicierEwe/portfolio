import React from "react";
import Fragment from "react";
import styles from "./landing_page.module.css";

function LandingPage() {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.dev_name}>
          Hi i&apos;m <br></br>SpicierEwe,<br></br> a web/mobile developer
        </h1>
        <p>Full Stack Developer / Android / iOS</p>
        <button>Contact me !</button>
        <p>Projects</p>
      </section>
    </div>
  );
}

export default LandingPage;
