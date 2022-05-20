import React from "react";

import styles from "./project_nav_bar.module.css";

function ProjectNavBar({
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
              <a href={item2.link}>{item2.name}</a>
            </li>
            <li>
              <a href={item3.link}>{item3.name}</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default ProjectNavBar;
