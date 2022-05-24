import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../mobile_nav/mobile_nav_bar.module.css";
import MobileNavBarContext from "../../../providers/context_provider";
import Link from "next/link";

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
            // console.log(moblieNavBarCtx.isMobileNavOpen);
            moblieNavBarCtx.setOpenMObileNav(false);
            document.body.style.overflowY = "visible";
          }}
          size={31}
          className={styles.closebtn}
        ></AiOutlineCloseCircle>

        {/* here are th4r nav items */}
        <div className={styles.overlay_content}>
          <div
            onClick={() => {
              // console.log(moblieNavBarCtx.isMobileNavOpen);
              moblieNavBarCtx.setOpenMObileNav(false);
              document.body.style.overflowY = "visible";
            }}
          ></div>
          <Link href={"/#project_section"}>PROJECTS</Link>
        </div>
        <div>
          <Link href="#">CONTACT</Link>
        </div>
        <div>
          <Link href="#">ABOUT</Link>
        </div>
        <div
          onClick={() => {
            // console.log(moblieNavBarCtx.isMobileNavOpen);
            moblieNavBarCtx.setOpenMObileNav(false);
            document.body.style.overflowY = "visible";
          }}
        >
          <Link href={"/under-development"}>RESOURCES</Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;
