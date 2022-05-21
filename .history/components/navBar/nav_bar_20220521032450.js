import React from "react";

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
