import react from "react";
import styles from "./privacy_policy.module.css";
export default function DisplayPrivacyPolicy({ appName }) {
  console.log(appName);
  return (
    <div>
      {validApps.includes(appName) ? (
        <div>
          {/* app name  */}
          <h1 className={styles.app_name}>
            {privacy_policies_data[appName]["registered_app_name"]}
          </h1>

          <section className={styles.content_container}>
            <h2 className={styles.sub_title}>Privacy Policy</h2>

            <main className={styles.policies_container}>
              {/* trust message */}
              <div>{privacy_policies_data.trust_message}</div>
              {privacy_policies_data[appName].policies.map((policy, index) => {
                return (
                  <div key={index}>
                    {/* polic titile */}
                    <h3>{policy.title}</h3>

                    {/* policy description */}
                    <p>{policy.description}</p>
                  </div>
                );
              })}
              <hr></hr>
              <p>
                Last Revised on : &nbsp;
                {privacy_policies_data[appName].last_updated_date}
              </p>
            </main>
          </section>
        </div>
      ) : (
        <div>nothing available</div>
      )}
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
    last_updated_date: "22 May 2022",
    policies: [
      {
        title: "REQUIRES INTERNET FOR CONTACT PORTALS",
        description:
          "The App is Completely OFFLINE but you require internet to contact us through contacting PORTALS.",
      },
      {
        title: "Regarding your Private Information",
        description:
          "We Do not Collect Any of Your Data either Knowingly Or unknowingly. And Why Would WE ? I haven't created this APP to DESTROY myself ON the Day OF JUDGEMENT but rather to BE CLOSE TO MY LORD THE MOST HIGH (ALLAHUAKBAR) , May Allah (The Almighty) Forgive us All AND ADMIT us all TO JANNATUL FIRDAUSI AL AALA.",
      },
      {
        title: "Changes To This Privacy Policy",
        description:
          "This Privacy Policy is effective as of [[Date]] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you by placing a prominent notice on our website and also in the App..",
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
    last_updated_date: "22 May 2022",
    policies: [
      {
        title: "Needed Access Microphone (OPTIONAL)",
        description:
          "The Microphone is NEEDED while searching Al quran in the MORE SECTION SEARCH . You only need to enable microphone if you want to search the al-quran with your voice , otherwise you can completely neglect the microphone and can TYPE TO SEARCH.",
      },
      {
        title: "REQUIRES INTERNET TO PLAY AUDIO",
        description:
          "The App is Completely OFFLINE but the need of INTERNET is because of the audio files. Streaming audio files takes much less time and internet these days . I've kept the audio PLAYABLE only by INTERNET because it was impossible to supply them offline cause of VAST MAJORITY of RECITER CHOICES.",
      },
      {
        title: "Regarding your Private Information",
        description:
          "We Do not Collect Any of Your Data either Knowingly Or unknowingly. And Why Would WE ? I haven't created this APP to DESTROY myself ON the Day OF JUDGEMENT but rather to BE CLOSE TO MY LORD THE MOST HIGH (ALLAHUAKBAR) , May Allah (The Almighty) Forgive us All AND ADMIT us all TO JANNATUL FIRDAUSI AL AALA.",
      },
      {
        title: "Changes To This Privacy Policy",
        description:
          "This Privacy Policy is effective as of [[Date]] and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. If we make any material changes to this Privacy Policy, we will notify you by placing a prominent notice on our website and also in the App..",
      },
      {
        title: "Contact Information",
        description:
          "For any questions or concerns regarding the privacy policy, please send us an email to Contact Email Address dev.abeliever@gmail.com",
      },
    ],
  },
};
