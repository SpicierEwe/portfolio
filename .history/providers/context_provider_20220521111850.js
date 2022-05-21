import react, { useContext } from "react";
import { createContext, useState } from "react";

const MobileNavBarContext = createContext({
  openNav: false,
  setOpenMObileNav: () => {},
});

export function MobileNavContextProvider(props) {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  function setNavHandler(flag) {
    setDisplayMobileNav(flag);
  }

  const context = {
    openNav: displayMobileNav,
    setOpenMObileNav: setMobileNavHandler,
  };
  return (
    <MobileNavBarContext.Provider value={context}>
      {props.children}
    </MobileNavBarContext.Provider>
  );
}

export default MobileNavBarContext;
