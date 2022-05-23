/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircularDesign from "../../landing_page/circular_design/circular_design";
import styles from "./app_photos.module.css";
export default function AppPhotos({ photoLinks }) {
  return (
    <div>
      <div className={styles.photos_slider}>
        <CircularDesign></CircularDesign>
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
  );
}

// responsive settings for the carousel
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
