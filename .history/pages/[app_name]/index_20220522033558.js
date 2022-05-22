import { useRouter } from "next/router";
import react from "react";

function AppDisplay(props) {
  const router = useRouter();

  return (
    <div>
      <div>{router.pathname}</div>
    </div>
  );
}

export default aa;
