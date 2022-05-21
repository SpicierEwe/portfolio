import react, { useContext } from "react";
import { createContext, useState } from "react";

const MobileNavBarContext = createContext({
  openNav: false,
  setOpenMObileNav: () => {},
});

function setNav(flag) {}

export function MobileNavContextProvider(props) {
  const [displayMobileNav, setDisplayMobileNav] = useState(false);

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
