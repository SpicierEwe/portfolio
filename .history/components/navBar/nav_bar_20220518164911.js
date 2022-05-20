import React from "react";

import styles from "./nav_bar.module.css";

function NavBar({
  item1 = {
    name: "CURRENT",
    link: "/current",
  },
  item1 = {
    name: "CURRENT",
    link: "/current",
  },
  item1 = {
    name: "CURRENT",
    link: "/current",
  },
}) {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href="#">{item1}</a>
            </li>
            <li>
              <a href="#">{item2}</a>
            </li>
            <li>
              <a href="#">{item3}</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
