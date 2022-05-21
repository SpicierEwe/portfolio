import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../mobile_nav/mobile_nav_bar.module.css";
import MobileNavBarContext from "../../../providers/context_provider";

function MobileNavBar(props) {
  const moblieNavBarCtx = useContext(MobileNavBarContext);

  return (
    <div>
      <div
        style={{
          visibility: moblieNavBarCtx.isMobileNavOpen ? "visible" : "hidden",
        }}
        id="myNav"
        className={styles.overlay}
      >
        {/* close button */}
        <AiOutlineCloseCircle
          onClick={() => {
            console.log(moblieNavBarCtx.isMobileNavOpen);
            moblieNavBarCtx.setOpenMObileNav(false);
            document.body.style.overflowY = "visible";
          }}
          size={31}
          className={styles.closebtn}
        ></AiOutlineCloseCircle>

        {/* here are th4r nav items */}
        <div className={styles.overlay_content}>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;
