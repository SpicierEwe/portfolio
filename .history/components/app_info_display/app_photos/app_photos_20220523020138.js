/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import styles from "./app_photos.module.css";
export default function AppPhotos({ photoLinks }) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [omitedPhotos, setOmitedPhotos] = useState([]);

  function automateImages() {
    return setTimeout(function () {
      if (currentIndex < photoLinks.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setOmitedPhotos((prev) => [...prev, currentIndex]);
      } else {
        setOmitedPhotos([]);
        setCurrentIndex(-1);
        console.log(currentIndex);
      }
    }, 3000);
  }
  automateImages();
  return (
    <div>
      <div className={styles.app_photos_container}>
        {photoLinks.map((photoLink, index) => {
          //   if (!omitedPhotos.includes(index)) {

          return (
            <div key={index}>
              <img
                style={
                  {
                    //   transform: omitedPhotos.includes(index)
                    //     ? "translateX(-150%)"
                    //     : "translateX(0)",
                    //   display: omitedPhotos.includes(index) ? "none" : "block",
                  }
                }
                className={`${styles.hidden} , ${styles.tt}`}
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
