import react from "react";
import CustomTitleWidget from "../../custom_widgets/custom_title/custom_title_widget";
import styles from "./privacy_policy.module.css";
export default function DisplayPrivacyPolicy({ appName }) {
  console.log(appName);
  return (
    <div>
      <div className={styles.background}>
        {validApps.includes(appName) ? (
          <div>
            {/* app name  */}
            <div className={styles.app_name_container}>
              <CustomTitleWidget
                title={privacy_policies_data[appName].registered_app_name}
              ></CustomTitleWidget>
            </div>
            <section className={styles.content_container}>
              {/* sub title  */}
              <div className={styles.sub_title_container}>
                <h2 className={styles.sub_title}>Privacy Policy</h2>
              </div>

              <main className={styles.policies_container}>
                {/* trust message */}
                <div>{privacy_policies_data.trust_message}</div>
                {privacy_policies_data[appName].policies.map(
                  (policy, index) => {
                    return (
                      <div key={index}>
                        {/* polic titile */}
                        <h3 className={styles.policy_title}>{policy.title}</h3>

                        {/* policy description */}
                        <p className={styles.policy_description}>
                          {policy.description}
                        </p>
                      </div>
                    );
                  }
                )}
                <hr></hr>
                <p>
                  Last Revised on : &nbsp;
                  {privacy_policies_data[appName].last_updated_date}.
                </p>
              </main>
            </section>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

const validApps = ["ahadith-Collection", "al-Qur'an", "food-deals"];

const privacy_policies_data = {
  // trust message

  trust_message:
    "When you use our app, you trust us with your information. Because we are very focus with your privacy, this Privacy Policy is meant to help you understand what data we collect and why we need it. This is important; We hope you will take time to read it carefully. We have tried to keep it as simple as possible.",

  // ahadith Collection provacy policy
  "ahadith-Collection": {
    registered_app_name: "ahadith Collection",
    last_updated_date: "22 May, 2022",
    policies: [
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
    last_updated_date: "31 May, 2022",
    policies: [
      {
        title: "Needed Microphone Access (OPTIONAL)",
        description:
          "The Microphone is NEEDED while searching Al quran in the More Seaction Search. You only need to enable microphone if you want to search the al-quran with your voice , otherwise you can completely neglect the microphone and can Type to Search.",
      },
      {
        title: "Requires Internet",
        description:
          "The App is Completely Offline but the need of Internet is because of the audio files. Streaming audio files takes much less time and internet these days . I've kept the audio Playable only by Internet because it was impossible to supply them offline cause of Vast Majority of Reciter Choices. And you also need internet in order to download the audio files, and to be able to contact to us through contacting Poratal.",
      },
      {
        title: "Requires Location Permission",
        description:
          "The App requires location Permission in order to fetch salah times and qibla direction according to your location.",
      },
      {
        title: "Needed Access Storage",
        description:
          "This Qur'an app need to access storage in your device so that one of the features work properly. This is needed in order to you can downloading files of application needs from our server to your storage. So that the feature can accessed by offline. You must know, we not steal data from your storage to our server.",
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

  // non islamic apps privacy policy

  // food deals privacy policy
  "food-deals": {
    registered_app_name: "Food Deals",
    last_updated_date: "16 June, 2022",
    policies: [
      {
        title: "Requires Internet",
        description:
          "Requires internet inorder to display the respective websites and also for contact portal so that you can reach us.",
      },
      {
        title: "Requires Location Permission",
        description:
          "'Requires location permissions inorder to show that the website can show you food places and food data nearest to you.",
      },

      {
        title: "Regarding your Private Information",
        description:
          "We do not Collect any of Your Data either knowingly or unknowingly. Your data is only yours so rest assured.",
      },
      {
        title: "Changes To This Privacy Policy",
        description:
          "This Privacy Policy is effective as of 16 June, 2022 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you by placing a prominent notice on our website and also in the App..",
      },
      {
        title: "Contact Information",
        description:
          "For any questions or concerns regarding the privacy policy, please send us an email to Contact Email Address dev.abeliever@gmail.com",
      },
    ],
  }, // food deals privacy policy
  "study-practice": {
    registered_app_name: "Study Practice",
    last_updated_date: "16 June, 2022",
    policies: [
      {
        title: "Requires Internet",
        description:
          "The Data in this app comes from a back-end database so inorder to access the data you need a working internet connection.",
      },
      {
        title: "REQUIRES PHONE NUMBER",
        description:
          "Currently the ( Sign in / Login ) can only be done through a phone number which makes your account more secure. So inorder to ( login / sign in ) you need a working phone number.",
      },

      {
        title: "Regarding your Private Information",
        description:
          "'Only the data you enter while making your account is collected ( for ex - Name / Birthday ) inorder to make your profile which only you can access whenever you want.'",
      },
      {
        title: "Changes To This Privacy Policy",
        description:
          "This Privacy Policy is effective as of 16 June, 2022 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you by placing a prominent notice on our website and also in the App..",
      },
      {
        title: "Contact Information",
        description:
          "For any questions or concerns regarding the privacy policy, please send us an email to Contact Email Address dev.abeliever@gmail.com",
      },
    ],
  },
};
