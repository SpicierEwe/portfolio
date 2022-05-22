import react from "react";

function AppDisplay(props) {
  return (
    <div>
      <div></div>
    </div>
  );
}

export async function getStaticPaths(context) {
  const url =
    "https://se-portfolio-db-default-rtdb.firebaseio.com/my_projects.json";
  const project_data = await fetch(url).then((response) => response.json());
  const current = project_data["current_projects"][0];
  const future = project_data["future_projects"];
  const completed = project_data["completed_projects"];

  return {
    props: {
      current: current,
      future: future,
      completed: completed,
      data: project_data,
    }, // will be passed to the page component as props
  };
}

export default AppDisplay;
