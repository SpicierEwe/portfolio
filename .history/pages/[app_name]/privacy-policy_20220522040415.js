import react from "react";
import { useRouter } from "next/router";
import DisplayPrivacyPolicy from "./privacy_policy.module.css";

function AppPrivayPolicy(props) {
  const router = useRouter();

  return (
    <div>
      <div>{router.query.app_name} Privay policy</div>

      <DisplayPrivacyPolicy
        appName={router.query.app_name}
      ></DisplayPrivacyPolicy>
    </div>
  );
}

export default AppPrivayPolicy;
