import react from "react";
import { createContext, useState } from "react";

const MobileNavBarContext = createContext();

function MobileNavManager(props) {
  [displayMenuOverLay, setDisplayMenuOverLay] = useState(false);

  const context = {
    displayMenuOverLay,
  };
  return (
    <MobileNavBarContext.Provider value={aa}>
      {props.children}
    </MobileNavBarContext.Provider>
  );
}

export default MobileNavManager;
