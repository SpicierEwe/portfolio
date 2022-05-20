import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects_data: {},
  distributeData: (data) => {},
});

export function ProjectdataProvider(props) {
  const defaultDataStructure = {
    my_projects: {
      completed_projects: [
        {
          project_description: "",
          project_image_url: "",
          project_title: "",
        },
      ],
      current_projects: [
        {
          ongoing_status: "",
          project_description: "",
          project_image_url: "",
          project_progress_percentage: "",
          project_title: "",
        },
      ],
      future_projects: [
        {
          project_description: "",
          project_image_url: "",
          project_title: "",
        },
      ],
    },
  };

  const [projectData, setProjectData] = useState(defaultDataStructure);

  ///fucntion distribute data to all components
  async function get_current_project_data({ url, projectType }) {
    const url =
      "https://se-portfolio-db-default-rtdb.firebaseio.com/my_projects/current.json";
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        project_title = data["my_projects"]["current_projects"][0];
      });
  }

  //   context is here
  const context = {
    projects_data: projectData,
    distributeData: distributeDataHandler,
  };
  return (
    <ProjectContext.Provider value={context}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
