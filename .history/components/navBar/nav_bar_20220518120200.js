import React from "react";

import styles from "./nav_bar.module.css";

function NavBar() {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav}>
            <li>
              <a href="#">PROJECS</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">WORK</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
