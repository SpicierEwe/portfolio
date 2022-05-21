import react from "react";
import { createContext, useState } from "react";

const MobileNavBarContext = createContext();

function MobileNavManager(props) {
  [displayMobileNav, setDisplayMobileNav] = useState(false);

  const context = {
    openNav: displayMobileNavHandler,
  };
  return (
    <MobileNavBarContext.Provider value={aa}>
      {props.children}
    </MobileNavBarContext.Provider>
  );
}

export default MobileNavManager;
