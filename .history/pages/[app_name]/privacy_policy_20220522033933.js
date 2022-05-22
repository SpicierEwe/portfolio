import react from "react";

function AppPrivayPolicy(props) {
  const router = useRouter();

  return (
    <div>
      <div>{router.query.app_name} Privay policy</div>
    </div>
  );
}

export default AppPrivayPolicy;
