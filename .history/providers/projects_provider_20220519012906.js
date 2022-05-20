import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects_data: [],
});

export const ProjectdataProvider = (props) => {
  const [projectData, setProjectData] = useState();
  context: {
    projects_data: projectData;
  }

  return (
    <ProjectContext.Provider value={[projectData]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
