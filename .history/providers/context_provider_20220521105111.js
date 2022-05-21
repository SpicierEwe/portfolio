import { createContext, useState } from "react";

const MobileNavBarContext = createContext();

export default function aa = (props)=> {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <MobileNavBarContext.Provider value={aa}>
      {props.children}
    </MobileNavBarContext.Provider>
  );
}
