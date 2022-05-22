/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./nav_bar.module.css";

function NavBar({
  item1 = {
    name: "PROJECTS",
    link: "#",
  },
  item2 = {
    name: "ABOUT",
    link: "#",
  },
  item3 = {
    name: "CONTACT",
    link: "#",
  },
}) {
  const [displayMenuOverLay, setDisplayMenuOverLay] = React.useState(false);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left}>
          <img src={"/logo.svg"}></img>
        </div>
        <div className={styles.right}>
          {/* 
***************************************************************
***************************************************************

 this the the menu icon ddisplayed for small devices START

***************************************************************
***************************************************************
  */}
          <div>
            <HiMenuAlt4
              onClick={() => {
                setDisplayMenuOverLay(true);
              }}
            ></HiMenuAlt4>
          </div>
          <div
            style={{ visibility: displayMenuOverLay ? "visible" : "hidden" }}
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

              <div>
                <nav>
                  <ul>
                    <div className={styles.nav}>
                      <li>
                        <a href={item1.link}>{item1.name}</a>
                      </li>
                      <li>
                        <a href={item2.link}>{item2.name}</a>
                      </li>
                      <li>
                        <a href={item3.link}>{item3.name}</a>
                      </li>
                    </div>
                    <div className={styles.nav}>
                      <li>
                        <a href={"#"}>MORE</a>
                      </li>
                      <li>
                        <a href={"#"}>RESOURCES</a>
                      </li>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* 
***************************************************************
***************************************************************

 this the the menu icon ddisplayed for small devices START

***************************************************************
***************************************************************
  */}
          <nav>
            <ul className={styles.nav_corner_flex}>
              <div className={styles.nav}>
                <li>
                  <a href={item1.link}>{item1.name}</a>
                </li>
                <li>
                  <a href={item2.link}>{item2.name}</a>
                </li>
                <li>
                  <a href={item3.link}>{item3.name}</a>
                </li>
              </div>
              <div className={styles.nav}>
                <li>
                  <a href={"#"}>MORE</a>
                </li>
                <li>
                  <a href={"#"}>RESOURCES</a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;