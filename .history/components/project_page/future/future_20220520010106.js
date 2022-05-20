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
                  <div className={styles.image_container}>
                    <img src="/android_studio_icon.png"></img>
                  </div>
                  <div>
                    <h3>{future["project_title"]}</h3>
                    <p>{future["project_descriptiom"]}</p>
                  </div>
                </div>
                {/* card end */}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Future;
