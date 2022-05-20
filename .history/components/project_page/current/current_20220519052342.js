/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react, { useContext } from "react";
import Image from "next/image";
import styles from "./current.module.css";
import ProjectContext from "../../../providers/projects_provider";
import { useState } from "react";

function Current(props) {
  const [data, setData] = useState({});

  async function fetch_project_data() {
    const url =
      "https://se-portfolio-db-default-rtdb.firebaseio.com/my_projects/current_projects.json";
    await fetch(url).then((response) =>
      response.json().then((data) => {
        console.log(data);
        setData(data);

        // data.map((item) => {
        //   console.log(item);
        //   project_title = item["project_title"];
        //   project_dis = item["project_dis"];
        //   project_image = item["project_image_url"];
        //   ongoing_status = item["ongoing_status"];
        //   project_progress_percentage = item[" project_progress_percentage"];
        // });
      })
    );
  }

  fetch_project_data();
  console.log(data);

  var project_title = data["project_title"];
  var project_dis = "";
  var project_image = "";
  var ongoing_status = "";
  var project_progress_percentage = "";
  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.category}>Current</h2>
      </header>

      <section className={styles.section}>
        <div className={styles.left}>
          {/* left */}
          <div className={styles.current_project_info_container}>
            <h3>{project_title}</h3>
            <p>{project_dis}</p>
          </div>
          {/* progress bar */}
          <div className={styles.progressBar}>
            <div className={styles.progress_tracker}></div>
          </div>
          {/* progress status info  */}
          <div className={styles.proggress_percentage_flex}>
            <p className={styles.status_info_box}>completion :</p>
            <p className={styles.status_info_box}>56%</p>
          </div>
          <div className={styles.proggress_percentage_flex}>
            <p className={styles.status_info_box}>status :</p>
            <p className={styles.status_info_box}>polishing interface</p>
          </div>
        </div>
        {/* right */}
        <div className={styles.right}>
          <div className={styles.current_project_logo}>
            {/* image */}
            <img src={project_image}></img>
          </div>
        </div>
      </section>

      <div className={styles.sized_box}></div>
    </div>
  );
}

export default Current;
