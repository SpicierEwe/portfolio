import react from "react";
import { useRouter } from "next/router";
import DisplayPrivacyPolicy from "../../providers/privacy_policies_provider";

function AppPrivayPolicy(props) {
  const router = useRouter();

  return (
    <div>
      <div>{router.query.app_name} Privay policy</div>

      <DisplayPrivacyPolicy></DisplayPrivacyPolicy>
    </div>
  );
}

export default AppPrivayPolicy;
