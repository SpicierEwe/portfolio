import React from "react";

import styles from "../appbar/appbar.module";

function AppBar() {
  return (
    <div>
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
        </ul>
      </nav>
    </div>
  );
}

export default AppBar;
