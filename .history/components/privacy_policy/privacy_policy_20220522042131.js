import react from "react";
import styles from "./privacy_policy.module.css";
export default function DisplayPrivacyPolicy({ appName }) {
  console.log(appName);
  return (
    <div>
      {appName == "ahadith-Collection" ? (
        <div>
          <div>{ahadithCollection.trust_message}</div>
          {ahadithCollection.policies.map((policy) => {
            return (
              <div>
                <div>{policy.title}</div>
                <div>{policy.description}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>nothing available</div>
      )}
    </div>
  );
}

const ahadithCollection = {
  trust_message:
    "When you use our app, you trust us with your information. Because we are very focus with your privacy, this Privacy Policy is meant to help you understand what data we collect and why we need it. This is important; We hope you will take time to read it carefully. We have tried to keep it as simple as possible.",

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
  ],
};
