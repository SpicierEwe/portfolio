import react from "react";
import styles from "./sub_nav.module.css";
import AppPhotos from "../app_photos/app_photos";

export default function SubNav({ photosLinks }) {
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

        <AppPhotos photoLinks={photosLinks}></AppPhotos>
      </div>
    </div>
  );
}
