import react, { useContext, useReducer } from "react";
import styles from "./sub_nav.module.css";
import AppPhotos from "../app_photos/app_photos";
import dataContext from "../../../providers/data_provider";

export default function SubNav({ video_link, photos_links, app_description }) {
  const { data } = useContext(dataContext);

  const [selectedMenu, setSelectedMenu] = react.useState(1);

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
                      selectedMenu === index
                        ? "0.15em solid #e67112"
                        : "0.15em solid #f7f7f7",
                    color: selectedMenu === index ? "#e67112" : "#000",
                  }}
                >
                  <a>{item}</a>
                </li>
              </div>
            );
          })}
        </ul>
        {/* app photos display */}
        {selectedMenu === 0 ? <AppPhotos></AppPhotos> : null}
        {selectedMenu === 2 ? (
          <div className={styles.iframe_container}>
            <iframe
              className={styles.video_display_iframe}
              src={appInfo["video_link"]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen // allowFullScreen
            ></iframe>
          </div>
        ) : null}
        {selectedMenu === 1 ? <div>{appInfo["app_description"]}</div> : null}
      </div>
    </div>
  );
}
