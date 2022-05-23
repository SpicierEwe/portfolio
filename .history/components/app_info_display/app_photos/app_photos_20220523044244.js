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
  //   async function automateImages() {
  //     return setTimeout(function () {
  //       setCurrentIndex(currentIndex + 1);
  //       if (currentIndex != photoLinks.length) {
  //         slides.forEach((s, i) => {
  //           s.style.transform = `translateX(${85 * (i - currentIndex)}%)`;
  //         });
  //       } else {
  //         setCurrentIndex(0);
  //       }
  //       console.log(currentIndex);
  //     }, 2000);
  //   }
  //   //   automateImages();
  return (
    <div>
      {/* <div className={styles.app_photos_container}> */}
      <div className={styles.photos_slider}>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          showDots={true}
        >
          {photoLinks.map((photoLink, index) => {
            return (
              <div key={index}>
                <img src={photoLink} className={styles.slide}></img>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>

    // </div>
  );
}
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// custom dots

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={active ? "active" : "inactive"}
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};
