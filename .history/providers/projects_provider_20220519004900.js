import React, { useState, createContext } from "react";

export const ProjectContext = createContext();

export const ProjectdataProvider = (props) => {
  const [] = useState([]);
  return (
    <ProjectContext.Provider value={[]}>
      {props.children}
    </ProjectContext.Provider>
  );
};
