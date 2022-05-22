import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../mobile_nav/mobile_nav_bar.module.css";

function MobileNavBar(props) {
  const [displayMenuOverLay, setDisplayMenuOverLay] = React.useState(false);

  return (
    <div>
      <div>
        <HiMenuAlt4
          onClick={() => {
            setDisplayMenuOverLay(true);
            document.body.style.overflowY = "hidden";
          }}
        ></HiMenuAlt4>
      </div>
      <div
        // style={{ visibility: displayMenuOverLay ? "visible" : "hidden" }}
        className={styles.menu_overlay}
      >
        <div>
          <AiOutlineCloseCircle
            onClick={() => {
              displayMenuOverLay;
              setDisplayMenuOverLay(false);
            }}
            size={45}
            className={styles.menu_close_icon}
          ></AiOutlineCloseCircle>
          {/* <div className={styles.mobile_nav_container}></div> */}
          <nav className={styles.mobile_nav}>
            <ul>
              <li>
                <lUINK href={"#"}>PROJECTS</lUINK>
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