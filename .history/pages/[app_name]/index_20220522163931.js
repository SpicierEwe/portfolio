import { useRouter } from "next/router";
import react from "react";
import AppInfoDisplay from "../../components/app_info_display/app_info_display";

function AppDisplay(props) {
  const router = useRouter();

  return (
    <div>
      <div>{router.query.app_name}</div>
      <AppInfoDisplay appName={router.query.app_name}></AppInfoDisplay>
    </div>
  );
}

export default AppDisplay;
