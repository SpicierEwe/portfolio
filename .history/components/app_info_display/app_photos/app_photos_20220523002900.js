/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import styles from "./app_photos.module.css";
export default function AppPhotos({ photoLinks }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [linksArray, setLinsArray] = useState(photoLinks);

  var links = photoLinks;
  function automateImages() {
    setInterval(function () {
      setLinsArray(linksArray.splice(0, 1));
      console.log(links);
    }, 2000);
  }

  automateImages();
  return (
    <div>
      <div className={styles.app_photos_container}>
        {photoLinks.map((photoLink, index) => {
          //   if (index === currentIndex) {
          return (
            <div key={index}>
              <img
                style={{ display: "block" }}
                className={styles.hidden}
                src={photoLink}
              ></img>
            </div>
          );
          //   }
        })}
      </div>
    </div>
  );
}
