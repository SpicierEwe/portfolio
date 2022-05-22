/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react from "react";
import store from "../../../providers/store";
import CustomTitleWidget from "../custom_widgets/custom_title/custom_title_widget";

import styles from "./future.module.css";

function Future(props) {
  const future = store.getState().projectData["future_projects"];
  //   console.log(future);
  return (
    <div>
      <div className={styles.background}>
        <CustomTitleWidget title={"Future"}></CustomTitleWidget>

        <section className={styles.section}>
          {future.map((future, index) => {
            return (
              <div key={index}>
                {/* card */}
                <div className={styles.card}>
                  <div className={styles.left}>
                    <img
                      className={styles.image}
                      src={future["project_image_url"]}
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
    </div>
  );
}

export default Future;
