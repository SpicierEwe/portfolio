import react from "react";
import styles from "./privacy_policy.module.css";
export default function DisplayPrivacyPolicy({ appName }) {
  console.log(appName);
  return (
    <div>
      {appName == "ahadith-Collection" ? (
        <div>{ahadithCollection}</div>
      ) : (
        <div>nothing available</div>
      )}
    </div>
  );
}

const ahadithCollection = (
 
);
