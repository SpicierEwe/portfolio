import react, { useReducer } from "react";
import styles from "./sub_nav.module.css";
import AppPhotos from "../app_photos/app_photos";
import store from "../../../providers/store";

export default function SubNav({ appInfo }) {
  const data = store.getState();

  const [selecedMenu, setSelectedMenu] = react.useState(0);

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
                <li
                  onClick={(e) => {
                    setSelectedMenu(index);
                  }}
                  style={{
                    borderBottom:
                      selecedMenu === index
                        ? "0.15em solid #e67112"
                        : "0.15em solid #f7f7f7",
                    color: selecedMenu === index ? "#e67112" : "#000",
                  }}
                >
                  <a>{item}</a>
                </li>
              </div>
            );
          })}
        </ul>
        <h1>{current.projectData["current_projects"][0]}</h1>

        {/* app photos display */}
        {selecedMenu === 0 ? (
          <AppPhotos photoLinks={appInfo["photo_links"]}></AppPhotos>
        ) : null}
      </div>
    </div>
  );
}
