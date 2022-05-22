import react from "react";
import { createContext, useState } from "react";

const MobileNavBarContext = createContext();

function MobileNavManager(props) {
  [displayMobileNav, setDisplayMobileNav] = useState(false);

  const context = {
    openNav: displayMobileNav,
    setOpenNav: setDisplayMobileNav,
  };
  return (
    <MobileNavBarContext.Provider value={context}>
      {props.children}
    </MobileNavBarContext.Provider>
  );
}

export default MobileNavBarContext;