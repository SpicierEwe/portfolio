import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  current: {},
  future: {},
  completed: {},
  distributeData: (data) => {},
});

export function ProjectdataProvider(props) {
  const [currentData, setCurrentData] = useState({});
  const [futureData, setfutureData] = useState({});
  const [completedData, setcompletedData] = useState({});

  ///fucntion distribute data to all components
  function distributeDataHandler(data) {
    console.log("distributer ran");

    setProjectData(data);
    // console.log(data);
    // console.log(projectData);
  }

  //   context is here
  const context = {
    distributeData: distributeDataHandler,
    current: {},
    future: {},
    completed: {},
  };
  return (
    <ProjectContext.Provider value={context}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
