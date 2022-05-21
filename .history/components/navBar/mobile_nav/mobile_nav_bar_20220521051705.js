import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "../mobile_nav/mobile_nav_bar.module.css";

function MobileNavBar() {
// item1 = {
//   name: "PROJECTS",
//   link: "#",
// },
// item2 = {
//   name: "ABOUT",
//   link: "#",
// },
// item3 = {
//   name: "CONTACT",
//   link: "#",
// }
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
                <a href={item1.link}>{item1.name}</a>
              </li>
              <li>
                <a href={item2.link}>{item2.name}</a>
              </li>
              <li>
                <a href={item3.link}>{item3.name}</a>
              </li>
              <li>
                <a href={"#"}>MORE</a>
              </li>
              <li>
                <a href={"#"}>RESOURCES</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobileNavBar;
