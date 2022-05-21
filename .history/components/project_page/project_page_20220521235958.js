import React from "react";
import styles from "./project_page.module.css";

import Current from "./current/current";
import Completed from "./completed/completed";
import Future from "./future/future";

function ProjectsPage(props) {
  return (
    <div>
      <div className={styles.projects_bg}>
        <div className={styles.content_flex}>
          {/* 
          left side ere is the box design
          */}
          <div className={styles.left}>
            <div className={styles.outer_box_design}>
              <div className={styles.inner_box_design}></div>
            </div>
          </div>
          {/* 
            right size  here is prject intro description
             */}
          <div className={styles.right}>
            <section className={styles.section_project_intro_text_box}>
              <div>
                <h2 className={styles.title}>My Projects</h2>
                <p className={styles.dis}>
                  Here are some of my projects. The Current ones, The Completed
                  ones and inshallah the Future ones.<br></br>
                  i&apos;m Alhamduliah always open to new Ideas. <br></br>{" "}
                  Contact me if you have any.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Current></Current>
      {
      <Completed></Completed>
      <div className={styles.sized_box}></div>
      <Future></Future>
      <div className={styles.sized_box}></div> */}
    </div>
  );
}

export default ProjectsPage;
