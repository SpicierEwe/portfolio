import { useRouter } from "next/router";
import react from "react";

function AppDisplay(props) {
  const router = useRouter();

  return (
    <div>
      <div>{router.query.app_name}</div>
      <></>
    </div>
  );
}

export default AppDisplay;
