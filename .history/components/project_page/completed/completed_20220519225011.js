/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./completed.module.css";
import store from "../../../providers/store";
import { BsPlayCircle, BsPlayCircleFill } from "react-icons/Bs";
import { useState } from "react";
import ProjectCategoryWidget from "../custom_widgets/project_category_widget/project_category_widget";
import SizedBox from "../custom_widgets/sized_box_widget/sized_box_widget";
// BsPlayCircle

function Completed(props) {
  // Provider ***************************************************************
  var completed = store.getState().projectData["completed_projects"];

  // Provider ***************************************************************

  ///this  is for hovered play icon when is clicked project promo video will be shown
  const [selectedIndex, setSelctedIndex] = useState(0);
  const [isClicked, setIsLlicked] = useState(false);

  return (
    <div>
      <div className={styles.section_background}>
        <ProjectCategoryWidget
          projectCategoty={"Completed"}
        ></ProjectCategoryWidget>
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
                    {/*
                   over lay divs start here 
                   conditional rendering for project promo video
                   */}

                    {selectedIndex == index && isClicked ? (
                      <CustomIfram
                        src={project["project_video_url"]}
                      ></CustomIfram>
                    ) : (
                      <div className={styles.play_icon_overlay_container}>
                        <div className={styles.play_icon_overlay}></div>
                        <BsPlayCircle
                          onClick={() => {
                            console.log("i was clicekd");
                            setIsLlicked(true);
                            setSelctedIndex(index);
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
      </div>
      <SizedBox></SizedBox>
    </div>
  );
}
export default Completed;

// custom iFrame Function ****************************************************
function CustomIfram({ src }) {
  return (
    <div
      style={{ opacity: "100" }}
      className={styles.play_icon_overlay_container}
    >
      <div className={styles.play_icon_overlay}></div>
      <iframe
        // className={styles.play_icon}
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}
