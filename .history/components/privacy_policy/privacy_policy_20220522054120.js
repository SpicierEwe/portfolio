import react from "react";
import styles from "./privacy_policy.module.css";
export default function DisplayPrivacyPolicy({ appName }) {
  console.log(appName);
  return (
    <div>
      {validApps.includes(appName) ? (
        <div>
          {/* app name  */}
          <h1 className={styles.app_name}>ahadith Collection</h1>

          <section className={styles.content_container}>
            <h2 className={styles.sub_title}>Privacy Policy</h2>

            <main className={styles.policies_container}>
              <div>{ahadithCollection.trust_message}</div>
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
  trust_message:
    "When you use our app, you trust us with your information. Because we are very focus with your privacy, this Privacy Policy is meant to help you understand what data we collect and why we need it. This is important; We hope you will take time to read it carefully. We have tried to keep it as simple as possible.",
  "ahadith-Collection": {
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
};
