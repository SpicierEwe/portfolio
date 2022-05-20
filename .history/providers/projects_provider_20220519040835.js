import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects_data: {},
  distributeData: (data) => {},
});

export function ProjectdataProvider(props) {
  const [projectData, setProjectData] = useState({});

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
