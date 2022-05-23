/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./completed.module.css";
// import store from "../../../providers/store";
import { BsPlayCircle, BsPlayCircleFill } from "react-icons/bs";
import { useContext, useState } from "react";

import CustomTitleWidget from "../../custom_widgets/custom_title/custom_title_widget";
import Link from "next/link";
import dataContext from "../../../providers/data_provider";

// BsPlayCircle

function Completed(props) {
  // Provider ***************************************************************
  const DataCtx = useContext(dataContext);
  var completed = DataCtx.data["completed_projects"];

  // Provider ***************************************************************

  ///this  is for hovered play icon when is clicked project promo video will be shown
  const [selectedIndex, setSelctedIndex] = useState(0);
  const [isClicked, setIsLlicked] = useState(false);

  return (
    <div>
      <div className={styles.section_background}>
        <CustomTitleWidget title={"Completed"}></CustomTitleWidget>
        <section>
          <div className={styles.grid_container}>
            {completed.map((completedProjectInfo, index) => {
              // only showing completed projects if visible in database
              // if (project["visible"] === true) {
              return (
                <div
                  key={index}
                  // style={{ backgroundColor: getRandomColor() }}
                  className={styles.grid_item}
                >
                  <div
                    style={{
                      backgroundColor: completedProjectInfo["background_color"],
                    }}
                    className={styles.yt_video}
                  >
                    <img src={completedProjectInfo["project_image_url"]}></img>
                    {/*
                   over lay divs start here 
                   conditional rendering for project promo video
                   */}

                    {/* this over lay is for i frame play currenly disabled cause im taking the yser to the project info page directly */}
                    {/* {selectedIndex == index && isClicked ? (
                        <CustomIfram
                          src={project["project_video_url"]}
                        ></CustomIfram>
                      ) : 
                      ( */}
                    <div className={styles.play_icon_overlay_container}>
                      <div className={styles.play_icon_overlay}></div>
                      <Link href={"/" + completedProjectInfo["code_name"]}>
                        <BsPlayCircle
                          // onClick={() => {
                          //   console.log("i was clicekd");
                          //   setIsLlicked(true);
                          //   setSelctedIndex(index);
                          // }}
                          className={styles.play_icon}
                          color="#223c63"
                          size="35"
                        ></BsPlayCircle>
                      </Link>
                    </div>
                    {/* ) } */}

                    {/* over lay divs end here */}
                  </div>

                  <div className={styles.project_description_box}>
                    <h2>{completedProjectInfo["project_title"]}</h2>

                    <button
                      onClick={() => {
                        if (completedProjectInfo["play_store_link"] != "#") {
                          window.open(
                            completedProjectInfo["play_store_link"],
                            "_blank"
                          );
                        }
                      }}
                      onMouseOver={() => {
                        // changing background on mouse enter of the download button here
                        changeBackground(
                          event,
                          completedProjectInfo["project_background_color"]
                        );
                      }}
                      onMouseLeave={() => {
                        // changing background on mouse Leave of the download button here
                        changeBackground(event, "white");
                      }}
                      className={styles.btn_download}
                    >
                      Download
                    </button>
                  </div>
                </div>
              );
              // }
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
export default Completed;
function changeBackground(e, color) {
  e.target.style.background = color;
}
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
