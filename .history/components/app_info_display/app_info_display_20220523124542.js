/* eslint-disable react/no-unescaped-entities */
import react, { useContext, useState } from "react";
import CustomTitleWidget from "../custom_widgets/custom_title/custom_title_widget";
import styles from "./app_info_display.module.css";
import AppPhotos from "./app_photos/app_photos";
import SubNav from "./sub_nav/sub_nav";
import Image from "next/image";
import dataContext from "../../providers/data_provider";

export default function AppInfoDisplay({ appName }) {
  // console.log(appName);
  const dataCtx = useContext(dataContext);
  return (
    <div>
      <div className={styles.background}>
        {data["validApps"].includes(appName) ? (
          <div className={styles.aa}>
            <div className={styles.main_container}>
              <div>
                <div className={styles.section_1_flex}>
                  <div
                    style={{
                      backgroundColor:
                        AppsInformation[appName]["background_color"],
                    }}
                    className={styles.section_1_part_1}
                  >
                    <Image
                      width={105}
                      height={105}
                      alt="app_logo"
                      src={AppsInformation[appName]["logo_link"]}
                      className={styles.logo_img}
                    ></Image>
                  </div>
                  <div className={styles.section_1_part_2}>
                    {/* mian flex of snmall(short) info with Download button */}
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
                      {/* this download button is only displayed in bigger screens */}
                      <a
                        className={`${styles.download_btn} ${styles.download_btn_desktop}`}
                        href={AppsInformation[appName]["download_link"]}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <button
                        // className={`${styles.download_btn} ${styles.download_btn_desktop}`}
                        >
                          Download
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                {/* this button is only displayed in small screens */}
                <a
                  href={AppsInformation[appName]["download_link"]}
                  rel="noreferrer"
                  target="_blank"
                >
                  <button
                    className={[
                      `${styles.download_btn} ${styles.download_btn_mobile}`,
                    ]}
                  >
                    Download
                  </button>
                </a>

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

// const AppsInformation = {
//   // ahadith Collection provacy policy
//   "ahadith-Collection": {
//     video_link: "https://www.youtube.com/embed/Q-TElwt5ZQs?rel=0",
//     logo_link:
//       "https://firebasestorage.googleapis.com/v0/b/se-portfolio-db.appspot.com/o/prophetName.png?alt=media&token=35be865e-5509-475a-8b13-8abc0db164a1",
//     download_link: "#",
//     background_color: "#faf1e6",
//     registered_app_name: "ahadith Collection",
//     release_date: "22 May, 2022",
//     information: [
//       {
//         title: "NAME",
//         description: "ahadith Collection",
//       },
//       {
//         title: "PLATFORM",
//         description: "Android",
//       },
//       {
//         title: "RELEASE",
//         description: "2 May, 2022",
//       },
//     ],
//     app_description: (
//       <h3 className={styles.description}>
//         IMPORTANT<br></br>
//         Alhamdulillah The App contains majority of the available sahih hadith
//         but it also contains some of the daif / hasan hadiths, So we have
//         provider for you Grade if available for a particular hadith.<br></br>
//         <br></br>
//         The App is very basic, simple and very straight forward to use. Features
//         the Hadiths in 3 languages ( English /urdu / arabic ). The information
//         about the hadith has been give right below the hadith. The App also
//         features the last Read to help you continue where you left reading.
//         There is also an option for Theme selection Just choose the theme
//         according to your needs.<br></br>
//         <br></br>
//         Contacting portals have been provided to you in order to reach to us in
//         case you need any help. Many other features are also present like if if
//         you want to copy a hadith you can easliy do it, you can also easily
//         share any hadith to any platform you want. Some more features are also
//         available in the App. PLease go thorught the Video of the app in order
//         to get the overview of the app. And indeed the best way is to just the
//         download the app yourself and discover the features yourself.
//         <br></br>
//         The App is availble completely free on Google Play. We hope inshallah
//         you'll enjoy the App.
//       </h3>
//     ),
//     photo_links: [
//       "https://play-lh.googleusercontent.com/ELQ9LKn2Jo4LE57SYu68kbKzrRD_LHrs37zmj91wXiV8JJX7noC8JirIZnT48PiGbONg=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/S54MdAgecdgzYxGZ-sAEnBjrSza8VuV-ZxlVB3YHhn74Z0rZ1mCckf0YIvkwLszb9xcT=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/vceZrrCzCA11_yG2967JaCMbwjEWn7Blc8ahlOIum76-u_xg15S0684PJD_dMp9vY1w=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/aPg3vNVyktc13Ox8GSkygaT2nrbnBe9X61qpi7D2vkyDwANUt-tete5FY_TvFf4Jrk9B=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/uNL6P6dbjzkR7bgSS6Hh51lcIHA7dJtZEjLNid9KGljxyRQFMMpU1p8p4BukLKENHKg=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/MP8tNMuQt3xYiWY3qV953JqAhLBP7VueZ7IGbAACWoxWbddqG01nRItldeGRnX2clhiY=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/04kaTbaeoE6nH3y2xOfSNHY6lgWOQjCbuOuE-RCLri_Gk7RXvzSj0kcAX6LKqoJKwhg=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/ZkjfOERPviu2flrLUrY-DvJV52eMA2iOoF_ri8J-wzB9f5JnppzXdRoX1vc9caTohg=w1440-h620-rw",
//     ],
//   },

//   // al Qur'an privacy policy
//   "al-Qur'an": {
//     video_link: "https://www.youtube.com/embed/LQcFB_BXuRY?rel=0",
//     download_link:
//       "https://play.google.com/store/apps/details?id=com.spicierewe.al_quran",
//     logo_link:
//       "https://firebasestorage.googleapis.com/v0/b/se-portfolio-db.appspot.com/o/quran_app.png?alt=media&token=c7bbe6e8-f176-4a46-bc82-199013fea452",

//     background_color: "#f6efcc",
//     registered_app_name: "al Qur'an",
//     release_date: "22 May, 2022",

//     information: [
//       {
//         title: "NAME",
//         description: "al Qur'an",
//       },
//       {
//         title: "PLATFORM",
//         description: "Android",
//       },
//       {
//         title: "RELEASE",
//         description: "2 May, 2022",
//       },
//     ],
//     app_description: (
//       <h3 className={styles.description}>
//         al Qur'an is a free, simple and easy to use application that helps you
//         learn the Qur'an. We tried our best alhmdulillah to provide the reader
//         the most comfortable experience possible and we have also designed the
//         app interface not only for youth but also for older people who don't
//         have much experience with the new complex apps. O ! Younger ones teach
//         the elder ones how to use the app and be humble to them, inshallah
//         you'll find them to be Quick Learners.<br></br>
//         <br></br>Alhmadulillah the app is completely free to download from the
//         Play Store. The App has alot of features won't be possible to describe
//         all of them here, but we'll list a few. For example alhamdulillah the
//         app features Qur'an translation is 44 world wide Languages, 50+ reciter
//         choices, and the tafsirs, the App also features the favourites section
//         where you can easily collect the verses of the qur'an which ever you
//         want. The most important feature is of Last Read ! Well the app
//         alhamdulillah has it in the easieast possible way. Just select a verse
//         where you want to stop reading and inshallah app will open the very
//         verse where you left off when you click on the Last Read Icon.<br></br>
//         <br></br> Well i got carried away and the description is going quite
//         long, you'll be bored reading ! Its most fun to watch the video and get
//         a quick overview of the app and there are alot more quality features i
//         haven't meantioned here, well u can watch the launch video to know more.
//         And the best way is to download the App and discover them yourself. Well
//         You can watch the Video of the App from the Video section ! See Up next
//         to Discription and inshallah you will know majority of the features the
//         app offers.And inshallah We hope you'll enjoy the app.
//       </h3>
//     ),

//     photo_links: [
//       "https://play-lh.googleusercontent.com/ELQ9LKn2Jo4LE57SYu68kbKzrRD_LHrs37zmj91wXiV8JJX7noC8JirIZnT48PiGbONg=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/S54MdAgecdgzYxGZ-sAEnBjrSza8VuV-ZxlVB3YHhn74Z0rZ1mCckf0YIvkwLszb9xcT=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/vceZrrCzCA11_yG2967JaCMbwjEWn7Blc8ahlOIum76-u_xg15S0684PJD_dMp9vY1w=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/aPg3vNVyktc13Ox8GSkygaT2nrbnBe9X61qpi7D2vkyDwANUt-tete5FY_TvFf4Jrk9B=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/uNL6P6dbjzkR7bgSS6Hh51lcIHA7dJtZEjLNid9KGljxyRQFMMpU1p8p4BukLKENHKg=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/MP8tNMuQt3xYiWY3qV953JqAhLBP7VueZ7IGbAACWoxWbddqG01nRItldeGRnX2clhiY=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/04kaTbaeoE6nH3y2xOfSNHY6lgWOQjCbuOuE-RCLri_Gk7RXvzSj0kcAX6LKqoJKwhg=w1440-h620-rw",
//       "https://play-lh.googleusercontent.com/ZkjfOERPviu2flrLUrY-DvJV52eMA2iOoF_ri8J-wzB9f5JnppzXdRoX1vc9caTohg=w1440-h620-rw",
//     ],
//   },
// };
