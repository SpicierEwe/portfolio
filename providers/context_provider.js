import react, { useContext } from "react";
import { createContext, useState } from "react";

const MobileNavBarContext = createContext({
  isMobileNavOpen: false,
  setOpenMObileNav: (flag) => {},
});

export function MobileNavContextProvider(props) {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);
  function setMobileNavHandler(flag) {
    setDisplayMobileNav(flag);
  }

  const context = {
    isMobileNavOpen: displayMobileNav,
    setOpenMObileNav: setMobileNavHandler,
  };
  return (
    <MobileNavBarContext.Provider value={context}>
      {props.children}
    </MobileNavBarContext.Provider>
  );
}

export default MobileNavBarContext;
