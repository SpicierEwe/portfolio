/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react, { useRef, useState } from "react";
import styles from "./app_photos.module.css";
export default function AppPhotos({ photoLinks }) {
  const ref = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [omitedPhotos, setOmitedPhotos] = useState([]);

  function automateImages() {
    return setTimeout(function () {
      //   setCurrentIndex(currentIndex + 1);
      //   slider.forEach((s, i) => {
      //     s.style.transform = `translateX(${100 * (i - currentIndex)}%)`;
      //   });
    }, 3000);
  }
  //   automateImages();
  return (
    <div>
      <div className={styles.app_photos_container}>
        <div>
          <img style={{}} className={styles.slides} src={photoLink}></img>
        </div>
      </div>
    </div>
  );
}
