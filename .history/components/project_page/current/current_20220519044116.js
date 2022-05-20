/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react, { useContext } from "react";
import Image from "next/image";
import styles from "./current.module.css";
import ProjectContext from "../../../providers/projects_provider";

function Current(props) {
  const { distributeData, projects_data } = useContext(ProjectContext);
  console.log(projects_data["my_projects"]);

  const project_title = "helllow";
  const project_dis =
    "aHadith Collection is a collection of the majority of the available Sahih Hadiths. The App will inshallah be available in (English/Urdu/Arabic). The entire hadith data has been taken only from the authetic sources ex-(www.sunnah.com) , more reference will inshallah be given inside the app under the Credits Seaction, the app will be inshallah be available very soon ,  you can track the Progress below. ";

  const project_image =
    "https://firebasestorage.googleapis.com/v0/b/se-portfolio-db.appspot.com/o/prophetName.png?alt=media&token=35be865e-5509-475a-8b13-8abc0db164a1";
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
