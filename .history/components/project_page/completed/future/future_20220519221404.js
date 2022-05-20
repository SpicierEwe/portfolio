import react from "react";
import store from "../../../../providers/store";

function Future(props) {
  const future = store.getState().projectData["future_projects"];
  console.log(future);
  return (
    <div>
      <div></div>
    </div>
  );
}
