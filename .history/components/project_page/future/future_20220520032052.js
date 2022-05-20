import react from "react";
import store from "../../../providers/store";
import ProjectCategoryWidget from "../custom_widgets/project_category_widget/project_category_widget";
import styles from "./future.module.css";

function Future(props) {
  const future = store.getState().projectData["future_projects"];
  //   console.log(future);
  return (
    <div>
      <div className={styles.background}>
        <ProjectCategoryWidget
          projectCategoty={"Future"}
        ></ProjectCategoryWidget>

        <section className={styles.section}>
          {future.map((future, index) => {
            return (
              <div key={index}>
                {/* card */}
                <div className={styles.card}>
                  <div className={styles.left}>
                    <img
                      className={styles.image}
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/se-portfolio-db.appspot.com/o/android_studio_icon.png?alt=media&token=89e2d4f9-0e42-477b-a3a3-2bc81e91bd60"
                      }
                    ></img>
                  </div>

                  <div className={styles.right}>
                    <h3>{future["project_title"]}</h3>
                    <p>{future["project_description"]}</p>
                  </div>
                </div>

                {/* card end */}
              </div>
            );
          })}
        </section>
      </div>
      <div className={styles.sized_box}></div>
    </div>
  );
}

export default Future;
