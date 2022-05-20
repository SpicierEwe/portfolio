import React from "react";
import Image from "next/image";
import styles from "./current.module.css";

function Current(props) {
  const project_title = "ahadith Collection";
  const project_dis =
    "aHadith Collection is a collection of the majority of the available Sahih Hadiths. The App will inshallah be available in (English/Urdu/Arabic). The entire hadith data has been taken only from the authetic sources ex-(www.sunnah.com) , more reference will inshallah be given inside the app under the Credits Seaction, the app will be inshallah be available very soon ,  you can track the Progress below. ";

  const project_image =
    "https://firebasestorage.googleapis.com/v0/b/se-portfolio-db.appspot.com/o/prophetName.png?alt=media&token=35be865e-5509-475a-8b13-8abc0db164a1";
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.current_project_card}>
          {/* left */}
          <div className={styles.left}>
            <h3>{project_title}</h3>
            <p>{project_dis}</p>
          </div>
        </div>
        {/* right */}
        <div className={styles.right}>
          <div className={styles.current_project_logo}>
            <h3>icon</h3>
          </div>
        </div>
      </section>

      <p>{project_dis}</p>
    </div>
  );
}

export default Current;
