import react, { createContext } from "react";

const dataCtx = createContext({});

export function DataContextProvider(props) {
  return (
    <dataCtx.Provider value={props.value}>{props.children}</dataCtx.Provider>
  );
}



const default =