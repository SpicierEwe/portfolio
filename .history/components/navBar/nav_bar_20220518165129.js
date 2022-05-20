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
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href={item1.link}>{item1.name}</a>
            </li>
            <li>
              <a href="#">{item2.name}</a>
            </li>
            <li>
              <a href="#">{item3.name}</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
