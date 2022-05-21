import { createContext } from "react";

const MobileNavBarCOntext = createContext();

function aa() {
  return (
    <MobileNavBarCOntext.Provider value={aa}>
      props.children
    </MobileNavBarCOntext.Provider>
  );
}
