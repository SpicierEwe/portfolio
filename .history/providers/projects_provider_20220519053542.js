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
  function distributeDataHandler(current, future, completed) {
    console.log("distributer ran");

    setCurrentData(data);
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
