import react from "react";
import CustomTitleWidget from "../custom_widgets/custom_title/custom_title_widget";
import styles from "./app_info_display.module.css";
import AppPhotos from "./app_photos/app_photos";
import SubNav from "./sub_nav/sub_nav";

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

                <SubNav appInfo={AppsInformation[appName]}></SubNav>
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
    video_link: "https://www.youtube.com/embed/Q-TElwt5ZQs?rel=0",
    logo_link:
      "https://firebasestorage.googleapis.com/v0/b/se-portfolio-db.appspot.com/o/prophetName.png?alt=media&token=35be865e-5509-475a-8b13-8abc0db164a1",
    registered_app_name: "ahadith Collection",
    release_date: "22 May, 2022",
    information: [
      {
        title: "NAME",
        description: "ahadith Collection",
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
    photo_links: [
      "https://play-lh.googleusercontent.com/ELQ9LKn2Jo4LE57SYu68kbKzrRD_LHrs37zmj91wXiV8JJX7noC8JirIZnT48PiGbONg=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/S54MdAgecdgzYxGZ-sAEnBjrSza8VuV-ZxlVB3YHhn74Z0rZ1mCckf0YIvkwLszb9xcT=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/vceZrrCzCA11_yG2967JaCMbwjEWn7Blc8ahlOIum76-u_xg15S0684PJD_dMp9vY1w=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/aPg3vNVyktc13Ox8GSkygaT2nrbnBe9X61qpi7D2vkyDwANUt-tete5FY_TvFf4Jrk9B=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/uNL6P6dbjzkR7bgSS6Hh51lcIHA7dJtZEjLNid9KGljxyRQFMMpU1p8p4BukLKENHKg=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/MP8tNMuQt3xYiWY3qV953JqAhLBP7VueZ7IGbAACWoxWbddqG01nRItldeGRnX2clhiY=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/04kaTbaeoE6nH3y2xOfSNHY6lgWOQjCbuOuE-RCLri_Gk7RXvzSj0kcAX6LKqoJKwhg=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/ZkjfOERPviu2flrLUrY-DvJV52eMA2iOoF_ri8J-wzB9f5JnppzXdRoX1vc9caTohg=w1440-h620-rw",
    ],
  },

  // al Qur'an privacy policy
  "al-Qur'an": {
    video_link: "https://www.youtube.com/embed/LQcFB_BXuRY?rel=0",
    download_link:
      "https://play.google.com/store/apps/details?id=com.quran.android.androidquran",
    logo_link:
      "https://firebasestorage.googleapis.com/v0/b/se-portfolio-db.appspot.com/o/quran_app.png?alt=media&token=c7bbe6e8-f176-4a46-bc82-199013fea452",
    registered_app_name: "al Qur'an",
    release_date: "22 May, 2022",

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
    photo_links: [
      "https://play-lh.googleusercontent.com/ELQ9LKn2Jo4LE57SYu68kbKzrRD_LHrs37zmj91wXiV8JJX7noC8JirIZnT48PiGbONg=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/S54MdAgecdgzYxGZ-sAEnBjrSza8VuV-ZxlVB3YHhn74Z0rZ1mCckf0YIvkwLszb9xcT=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/vceZrrCzCA11_yG2967JaCMbwjEWn7Blc8ahlOIum76-u_xg15S0684PJD_dMp9vY1w=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/aPg3vNVyktc13Ox8GSkygaT2nrbnBe9X61qpi7D2vkyDwANUt-tete5FY_TvFf4Jrk9B=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/uNL6P6dbjzkR7bgSS6Hh51lcIHA7dJtZEjLNid9KGljxyRQFMMpU1p8p4BukLKENHKg=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/MP8tNMuQt3xYiWY3qV953JqAhLBP7VueZ7IGbAACWoxWbddqG01nRItldeGRnX2clhiY=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/04kaTbaeoE6nH3y2xOfSNHY6lgWOQjCbuOuE-RCLri_Gk7RXvzSj0kcAX6LKqoJKwhg=w1440-h620-rw",
      "https://play-lh.googleusercontent.com/ZkjfOERPviu2flrLUrY-DvJV52eMA2iOoF_ri8J-wzB9f5JnppzXdRoX1vc9caTohg=w1440-h620-rw",
    ],
  },
};
