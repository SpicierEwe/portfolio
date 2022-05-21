import react, { useContext } from "react";
import { createContext, useState } from "react";

const MobileNavBarContext = createContext({
  openNav: false,
  setOpenMObileNav: (props) => {},
});

export function MobileNavContextProvider(props) {
  const moblieNavBarCtx = useContext(MobileNavBarContext);

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
