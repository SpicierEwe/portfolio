import react from "react";
import { createContext, useState } from "react";

const MobileNavBarContext = createContext();

export function MobileNavContextProvider(props) {
  const moblieNavBarCtx = React.useContext(MobileNavBarContext);

  const context = {
    openNav: displayMobileNav,
    setOpenMObileNav: setDisplayMobileNav,
  };
  return (
    <MobileNavBarContext.Provider value={context}>
      {props.children}
    </MobileNavBarContext.Provider>
  );
}

export default MobileNavBarContext;
