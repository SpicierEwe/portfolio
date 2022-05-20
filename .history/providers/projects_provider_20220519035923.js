import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects_data: {},
  distributeData: (data) => {},
});

export function ProjectdataProvider(props) {
  const [projectData, setProjectData] = useState("defaulted");

  ///fucntion distribute data to all components
  function distributeDataHandler(data) {
    console.log("distributer ran");

    setProjectData("aaxax");
    print(projectData);
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
