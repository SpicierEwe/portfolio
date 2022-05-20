import React, { useState, createContext } from "react";

export const ProjectContext = createContext({
  projects_data: {},
  fetchData: (data) => {},
});

export function ProjectdataProvider(props) {
  const [projectData, setProjectData] = useState();

  ///fucntion distribute data to all components
  async function fetch_project_data(url, projectType) {
    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        project_title = data[projectType]["current_projects"][0];
      });
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
