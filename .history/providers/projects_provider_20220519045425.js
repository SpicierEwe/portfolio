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
  function distributeDataHandler(data) {
    console.log("distributer ran");

    setProjectData(data);
    // console.log(data);
    // console.log(projectData);
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
