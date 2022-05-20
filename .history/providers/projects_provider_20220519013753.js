import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects_data: [],
});

export function ProjectdataProvider () {
  const [projectData, setProjectData] = useState();
  const context = {
    projects_data: projectData,
  };

  return (
    <ProjectContext.Provider value={context}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default