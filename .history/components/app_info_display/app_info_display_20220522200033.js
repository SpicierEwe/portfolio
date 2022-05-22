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
                    <h3 className={styles.title}>NAME</h3>
                    <p className={styles.description}>al Qur&apos;an</p>
                  </div>
                </div>
                {/* <h3>hiiii</h3> */}
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

const privacy_policies_data = {
  // trust message

  trust_message:
    "When you use our app, you trust us with your information. Because we are very focus with your privacy, this Privacy Policy is meant to help you understand what data we collect and why we need it. This is important; We hope you will take time to read it carefully. We have tried to keep it as simple as possible.",

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
  },

  // al Qur'an privacy policy
  "al-Qur'an": {
    registered_app_name: "al Qur'an",

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
        title: "PLATFORM",
        description: "Android",
      },
    ],
  },
};
