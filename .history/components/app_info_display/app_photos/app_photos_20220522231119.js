import react from "react";
import styles from "./app_info_display.module.css";
export default function AppPhotos({ photoLinks }) {
  return (
    <div>
      <div className={styles.app_photos_container}>
        {photoLinks.map((photoLink, index) => {
          return (
            <div key={index}>
              <img src={photoLink}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
