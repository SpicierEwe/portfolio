/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./completed.module.css";
import store from "../../../providers/store";
import { BsPlayCircle, BsPlayCircleFill } from "react-icons/Bs";
import { useState } from "react";
// BsPlayCircle

function Completed(props) {
  // Provider ***************************************************************
  var completed = store.getState().projectData["completed_projects"];
  const iframSrc = "https://www.youtube.com/embed/LQcFB_BXuRY";
  // Provider ***************************************************************

  ///this  is for hovered play icon when is clicked project promo video will be shown
  const [selectedIndex, setSelctedIndex] = useState(0);
  const [isClicked, setIsLlicked] = useState(false);

  return (
    <div style={{ backgroundColor: "#dfdfdf" }}>
      <header className={styles.header}>
        <h2 className={styles.category}>Completed</h2>
      </header>
      <section>
        <div className={styles.grid_container}>
          {completed.map((project, index) => {
            return (
              <div
                key={index}
                // style={{ backgroundColor: getRandomColor() }}
                className={styles.grid_item}
              >
                <div
                  style={{
                    backgroundColor: project["project_background_color"],
                  }}
                  className={styles.yt_video}
                >
                  <img src={project["project_image_url"]}></img>
                  {/* over lay divs start here */}

                  {isClicked ? (
                    <CustomIfram src={iframSrc}></CustomIfram>
                  ) : (
                    <div className={styles.play_icon_overlay_container}>
                      <div className={styles.play_icon_overlay}></div>
                      <BsPlayCircle
                        onClick={() => {
                          console.log("i was clicekd");
                          setIsLlicked(true);
                          setSelctedIndex(index);
                          console.log(selectedIndex, index);
                        }}
                        className={styles.play_icon}
                        color="#223c63"
                        size="35"
                      ></BsPlayCircle>
                    </div>
                  )}
                  {/* over lay divs end here */}
                </div>

                <div className={styles.project_description_box}>
                  <h2>{project["project_title"]}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className={styles.sized_box}></div>
    </div>
  );
}
export default Completed;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// custom i frame
function CustomIfram({ src }) {
  return (
    <div
      style={{ opacity: "100" }}
      className={styles.play_icon_overlay_container}
    >
      <div className={styles.play_icon_overlay}></div>
      <iframe
        className={styles.play_icon}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}
