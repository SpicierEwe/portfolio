import React from "react";

import styles from "./circular_design.module.css";

export default function CircularDesign() {
  return (
    <div>
      <section className={styles.circle_section}>
        <div className={styles.outer_circle}>
          <div className={styles.inner_circle}>
            {/* <img src={"/logo_color_no_bg.svg"}></img> */}
            <img src={"/logo_grey.svg"}></img>
          </div>
        </div>
      </section>
    </div>
  );
}
