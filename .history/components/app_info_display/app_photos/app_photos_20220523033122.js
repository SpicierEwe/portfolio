/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import react, { useRef, useState } from "react";
import styles from "./app_photos.module.css";
export default function AppPhotos({ photoLinks }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const [omitedPhotos, setOmitedPhotos] = useState([]);
  const slider = document.getElementsByClassName(".slides");
  console.log(slider);
  function automateImages() {
    return setTimeout(function () {
      setCurrentIndex(currentIndex + 1);
      slider.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - currentIndex)}%)`;
      });
    }, 3000);
  }
  //   automateImages();
  //   document.getElementById("slide_0").style.width = "233rem";

  return (
    <div>
      <div className={styles.app_photos_container}>
        {photoLinks.map((photoLink, index) => {
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
