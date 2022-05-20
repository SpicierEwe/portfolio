import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects_data: {},
});

export function ProjectdataProvider(props) {
  const [projectData, setProjectData] = useState({});

  ///fucntion distribute data to all components
  function distributeDataHandler({ data }) {
    setProjectData(data);

    const context = {
      projects_data: projectData,
      distributeData: distributeDataHandler,
    };
  }
  return (
    <ProjectContext.Provider value={context}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
