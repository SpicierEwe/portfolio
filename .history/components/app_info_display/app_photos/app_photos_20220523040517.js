/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
          s.style.transform = `translateX(${85 * (i - currentIndex)}%)`;
        });
      } else {
        setCurrentIndex(0);
      }
      console.log(currentIndex);
    }, 2000);
  }
  //   automateImages();
  return (
    <div>
      <div className={styles.app_photos_container}>
        {photoLinks.map((photoLink, index) => {
          return (
            <div key={index}>
              <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
              </Carousel>
              ;
            </div>
          );
          //   }
        })}
      </div>
    </div>
  );
}
