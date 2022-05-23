/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react from "react";
import styles from "./app_photos.module.css";
export default function AppPhotos({ photoLinks }) {
  function automateImages() {}
  return (
    <div>
      <div className={styles.app_photos_container}>
        {photoLinks.map((photoLink, index) => {
          return (
            <div key={index}>
              <img className={styles.hidden} src={photoLink}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
