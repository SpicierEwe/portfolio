/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./current.module.css";
import store from "../../../providers/store";
import CustomTitleWidget from "../custom_widgets/project_category_widget/custom_title_widget";

function Current(props) {
  const current = store.getState();
  const data = current.projectData["current_projects"][0];

  var project_title = data["project_title"];
  var project_dis = data["project_description"];
  var project_image = data["project_image_url"];
  var ongoing_status = data["ongoing_status"];
  var project_progress_percentage = data["project_progress_percentage"];

  return (
    <div>
      <div className={styles.background}>
        <CustomTitleWidget title={"Current"}></CustomTitleWidget>
        <section className={styles.section}>
          <div className={styles.left}>
            {/* left */}
            <div className={styles.current_project_info_container}>
              <h3>{project_title}</h3>
              <p>{project_dis}</p>
            </div>
            {/* progress bar */}
            <div className={styles.progressBar}>
              <div
                style={{
                  backgroundColor: "green",
                  width: `${project_progress_percentage}%`,
                }}
                className={styles.progress_tracker}
              ></div>
            </div>
            {/* progress status info  */}
            <div className={styles.proggress_percentage_flex}>
              <p className={styles.status_info_box}>completion :</p>
              <p style={{ color: "black" }} className={styles.status_info_box}>
                {project_progress_percentage}
              </p>
            </div>

            <div className={styles.proggress_percentage_flex}>
              <p className={styles.status_info_box}>status :</p>
              <p style={{ color: "black" }} className={styles.status_info_box}>
                {ongoing_status}
              </p>
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
      </div>
    </div>
  );
}

export default Current;
