import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects_data: {},
  fetchData: (data) => {},
});

export function ProjectdataProvider(props) {
  const [projectData, setProjectData] = useState();

  ///fucntion distribute data to all components
  async function fetch_project_data() {
    const url =
      "https://se-portfolio-db-default-rtdb.firebaseio.com/my_projects/current_projects.json";
    await fetch(url).then((response) => response.json());
  }

  //   context is here
  const context = {
    projects_data: projectData,
    fetchData: fetch_project_data,
  };
  return (
    <ProjectContext.Provider value={context}>
      {props.children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
