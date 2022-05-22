import react from "react";
import styles from "./privacy_policy.module.css";
export default function DisplayPrivacyPolicy({ appName }) {
  console.log(appName);
  return (
    <div>
      {appName == "ahadith-Collection" ? (
        <div>{ahadithCollection.trust_message}</div>
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
      description: "",
    },
  ],
};
