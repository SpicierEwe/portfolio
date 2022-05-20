import React, { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectdataProvider = (props) => {
  const [projectData, setProjectData] = useState();
  return (
    <ProjectContext.Provider value={[projectData]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
