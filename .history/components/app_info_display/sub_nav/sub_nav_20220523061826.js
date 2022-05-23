import react from "react";
import styles from "./sub_nav.module.css";
import AppPhotos from "../app_photos/app_photos";

export default function SubNav({ photoLinks }) {
  const [selecedMenu, setSelectedMenu] = react.useState("Description");

  const subNavItems = ["PHOTOS", "DESCRIPTION", "VIDEO"];
  return (
    <div>
      {/* <hr></hr> */}
      <div>
        {/* sub nav  */}
        <ul className={styles.sub_nav_flex}>
          {subNavItems.map((item, index) => {
            return (
              <div key={index}>
                <li>
                  <a>{item}</a>
                </li>
              </div>
            );
          })}
        </ul>

        {/* app photos display */}

        <AppPhotos photoLinks={photoLinks}></AppPhotos>
      </div>
    </div>
  );
}
