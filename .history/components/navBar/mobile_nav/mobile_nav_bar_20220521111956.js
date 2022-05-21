import React, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../mobile_nav/mobile_nav_bar.module.css";

function MobileNavBar(props) {
  const moblieNavBarCtx = useContext(MobileNavBarContext);

  return (
    <div>
      <div
        style={{
          visibility: moblieNavBarCtx.displayMobileNav ? "visible" : "hidden",
        }}
        className={styles.menu_overlay}
      >
        <div>
          <AiOutlineCloseCircle
            onClick={() => {
              console.log(moblieNavBarCtx.displayMobileNav);
              moblieNavBarCtx.setobileNavHandler(false);
              document.body.style.overflowY = "visible";
            }}
            size={31}
            className={styles.menu_close_icon}
          ></AiOutlineCloseCircle>
          {/* <div className={styles.mobile_nav_container}></div> */}
          <nav className={styles.mobile_nav}>
            <ul>
              <li>
                <a href={"#"}>PROJECTS</a>
              </li>
              <li>
                <a href={"#"}>CONTACT</a>
              </li>
              <li>
                <a href={"#"}>ABOUTE</a>
              </li>
              <li>
                <a href={"#"}>MORE</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;
