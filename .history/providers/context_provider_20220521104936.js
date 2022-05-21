import { createContext, useState } from "react";

const MobileNavBarContext = createContext();

function aa() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <MobileNavBarContext.Provider value={aa}>
      {props.children}
    </MobileNavBarContext.Provider>
  );
}
