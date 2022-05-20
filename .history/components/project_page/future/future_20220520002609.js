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
                <div className={styles.card}>
                  <div className={styles.image_container}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/se-portfolio-db.appspot.com/o/prophetName.png?alt=media&token=35be865e-5509-475a-8b13-8abc0db164a1"></img>
                  </div>
                  <h3>{future["project_title"]}</h3>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Future;
