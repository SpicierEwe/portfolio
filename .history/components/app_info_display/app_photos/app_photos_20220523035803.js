/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react, { useRef, useState } from "react";
import styles from "./app_photos.module.css";
export default function AppPhotos({ photoLinks }) {
  const ref = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = document.querySelectorAll(".slides");
  async function automateImages() {
    return setTimeout(function () {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex != photoLinks.length) {
        slides.forEach((s, i) => {
          s.style.transform = `translateX(${150 * (i - currentIndex)}%)`;
        });
      } else {
        setCurrentIndex(0);
      }
      console.log(currentIndex);
    }, 2000);
  }
  automateImages();
  return (
    <div>
      <div className={styles.app_photos_container}>
        {photoLinks.map((photoLink, index) => {
          return (
            <div key={index}>
              <img
                style={{
                  width: "13em",
                  //   marginRight: "3em",
                  borderRadius: "1em",
                  transition: "all 0.5s ease",
                }}
                className={"slides"}
                id={`slide_${index}`}
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
