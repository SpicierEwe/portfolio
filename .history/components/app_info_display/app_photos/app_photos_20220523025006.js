/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import styles from "./app_photos.module.css";
export default function AppPhotos({ photoLinks }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [omitedPhotos, setOmitedPhotos] = useState([]);

  function automateImages() {
    return setTimeout(function () {
      console.log(document.querySelector(".slides").length);
      //   setCurrentIndex(currentIndex + 1);
      //   slider.forEach((s, i) => {
      //     s.style.transform = `translateX(${100 * (i - currentIndex)}%)`;
      //   });
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
                className={styles.slides}
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
