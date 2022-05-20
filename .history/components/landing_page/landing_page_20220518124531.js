import React from "react";
import Fragment from "react";
import styles from "./landing_page.module.css";

function LandingPage() {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.dev_name}>
          Hi i&apos;m <br></br>SpicierEwe <br></br> a web/mobile developer
        </h1>

        <button>Contact me !</button>
        <button>Projects</button>
      </section>
    </div>
  );
}

export default LandingPage;
