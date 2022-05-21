/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
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
            <HiMenuAlt4></HiMenuAlt4>
          </div>
          <div className={styles.menu_overlay}></div>
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
