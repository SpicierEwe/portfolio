import React from "react";
import styles from "./project_page.module.css";

import Current from "./current/current";
import Completed from "./completed/completed";
import Future from "./future/future";

function ProjectsPage(props) {
  return (
    <div>
      <div className={styles.projects_bg}>
        {/* <Current></Current> */}

        <div className={styles.content_flex}>
          <div className={styles.left}>
            <div className={styles.outer_box_design}></div>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
      {/* <div className={styles.sized_box}></div>
      <Completed></Completed>
      <div className={styles.sized_box}></div>
      <Future></Future>
      <div className={styles.sized_box}></div> */}
    </div>
  );
}

export default ProjectsPage;
