import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  current: {},
  future: {},
  completed: {},
  distributeData: (data) => {},
});

export function ProjectdataProvider(props) {
  const [currentData, setCurrentData] = useState({});
  const [futureData, setfutureData] = useState([{}]);
  const [completedData, setCompletedData] = useState([]);

  ///fucntion distribute data to all components
  function distributeDataHandler(current, future, completed) {
    console.log("distributer ran");

    setCurrentData(current);
    setfutureData(future);
    setCompletedData(completed);
  }

  //   context is here
  const context = {
    distributeData: distributeDataHandler,
    current: currentData,
    future: futureData,
    completed: completedData,
  };
  return (
    <ProjectContext.Provider value={context}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
