import react from "react";
import { useRouter } from "next/router";

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
