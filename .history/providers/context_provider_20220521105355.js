import react from "react";
import { createContext, useState } from "react";

const MobileNavBarContext = createContext();

function aa(props) {
  [displayMenuOverLay, setDisplayMenuOverLay] = useState(false);

  return (
    <MobileNavBarContext.Provider value={aa}>
      {props.children}
    </MobileNavBarContext.Provider>
  );
}

export default MobileNavBarContext;
