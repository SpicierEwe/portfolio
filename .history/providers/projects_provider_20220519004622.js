import React, { useState, createContext } from "react";

export const ProjectContext = createContext();

export const projectdataProvider = (props) => {
  const [] = useState([]);
  return props.childeren;
};
