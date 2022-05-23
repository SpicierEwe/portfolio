import react from "react";
import CustomTitleWidget from "../custom_widgets/custom_title/custom_title_widget";
import styles from "./app_info_display.module.css";

export default function AppInfoDisplay({ appName }) {
  console.log(appName);
  return (
    <div>
      <div className={styles.background}>
        {validApps.includes(appName) ? (
          <div className={styles.aa}>
            <div className={styles.main_container}>
              <div>
                <div className={styles.section_1_flex}>
                  <div className={styles.section_1_part_1}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/se-portfolio-db.appspot.com/o/quran_app.png?alt=media&token=c7bbe6e8-f176-4a46-bc82-199013fea452"></img>
                  </div>
                  <div className={styles.section_1_part_2}>
                    {/* mian flext of snmall info with Download button */}
                    <div className={styles.section_1_part_2_sub_flex}>
                      <div className={styles.section_1_part_2_small_info_flex}>
                        {AppsInformation[appName]["information"].map(
                          (info, index) => {
                            return (
                              <div key={index}>
                                <h3 className={styles.title}>
                                  {info["title"]}
                                </h3>
                                <p className={styles.description}>
                                  {info["description"]}
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                      <button
                        className={`${styles.download_btn} ${styles.download_btn_desktop}`}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className={[
                    `${styles.download_btn} ${styles.download_btn_mobile}`,
                  ]}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>nothing available</div>
        )}
      </div>
    </div>
  );
}

const validApps = ["ahadith-Collection", "al-Qur'an"];

const AppsInformation = {
  // ahadith Collection provacy policy
  "ahadith-Collection": {
    registered_app_name: "ahadith Collection",
    release_date: "22 May, 2022",
    information: [
      {
        title: "Requires Internet",
        description:
          "The App is Completely Offline but you require internet to contact us through contacting Portals.",
      },
      {
        title: "Regarding your Private Information",
        description:
          "We Do not Collect Any of Your Data either knowingly or unknowingly, and why would we ? I haven't created this app to ruin myself On the Day of Judgement but rather to be close to my Lord The Most High (Allahuakabar) , May Allah (The Almighty) Forgive us all and admit us all to Jannatul Firdausi al aala.",
      },
      {
        title: "Changes To This Privacy Policy",
        description:
          "This Privacy Policy is effective as of 22 May, 2022 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you by placing a prominent notice on our website and also in the App..",
      },
      {
        title: "Contact Information",
        description:
          "For any questions or concerns regarding the privacy policy, please send us an email to Contact Email Address dev.abeliever@gmail.com",
      },
    ],
    photo_links: [
      "https://play-lh.googleusercontent.com/ELQ9LKn2Jo4LE57SYu68kbKzrRD_LHrs37zmj91wXiV8JJX7noC8JirIZnT48PiGbONg=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/S54MdAgecdgzYxGZ-sAEnBjrSza8VuV-ZxlVB3YHhn74Z0rZ1mCckf0YIvkwLszb9xcT=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/vceZrrCzCA11_yG2967JaCMbwjEWn7Blc8ahlOIum76-u_xg15S0684PJD_dMp9vY1w=w1440-h620-rw",
      "",
    ],
  },

  // al Qur'an privacy policy
  "al-Qur'an": {
    information: [
      {
        title: "NAME",
        description: "al Qur'an",
      },
      {
        title: "PLATFORM",
        description: "Android",
      },
      {
        title: "RELEASE",
        description: "2 May, 2022",
      },
    ],
  },
};
