import react from "react";
import store from "../../../../providers/store";
import ProjectCategoryWidget from "../../custom_widgets/project_category_widget/project_category_widget";
import styles from "./future.module.css";

function Future(props) {
  const future = store.getState().projectData["future_projects"];
  //   console.log(future);
  return (
    <div>
      <div>
        <ProjectCategoryWidget></ProjectCategoryWidget>
      </div>
    </div>
  );
}

export default Future;
