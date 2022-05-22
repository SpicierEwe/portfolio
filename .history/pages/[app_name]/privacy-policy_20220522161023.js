import react from "react";
import { useRouter } from "next/router";
import DisplayPrivacyPolicy from "../../components/app_display/privacy_policy/privacy_policy";

function AppPrivayPolicy(props) {
  const router = useRouter();

  return (
    <div>
      <DisplayPrivacyPolicy
        appName={router.query.app_name}
      ></DisplayPrivacyPolicy>
    </div>
  );
}

export default AppPrivayPolicy;
