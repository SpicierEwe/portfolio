import react, { createContext } from "react";

const dataCtx = createContext({});

export function DataContextProvider(props) {
  return (
    <dataProviderCtx.Provider value={props.value}>
      {props.children}
    </dataProviderCtx.Provider>
  );
}
