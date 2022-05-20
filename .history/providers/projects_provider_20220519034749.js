import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects_data: {},
  distributeData: (data) => {},
});

export function  ProjectdataProvider(props) aync =>{
  const [projectData, setProjectData] = useState();

  ///fucntion distribute data to all components
  function distributeDataHandler(data) {
    console.log("distributer ran");
    const url =
    "https://se-portfolio-db-default-rtdb.firebaseio.com/my_projects.json";
  const project_data = await fetch(url).then((response) => response.json());
   
    console.log(project_data);
    // setProjectData(data);
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
