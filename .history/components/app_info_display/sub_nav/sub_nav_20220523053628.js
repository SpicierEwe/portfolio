import react from "react";
import styles from "./sub_nav.css";

export default function SubNav(props) {
  return (
    <div>
      <div>
        {/* sub nav  */}
        <ul className={styles.sub_nav_flex}>
          <div>
            <li>
              <a>Photos</a>
            </li>
          </div>
          <div>
            <li>
              <a>Description</a>
            </li>
          </div>
        </ul>

        {/* app photos display */}

        {/* <AppPhotos
                  photoLinks={AppsInformation[appName]["photo_links"]}
                ></AppPhotos> */}
      </div>
    </div>
  );
}
