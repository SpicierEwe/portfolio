/* eslint-disable react/no-unescaped-entities */
import react, { useContext, useState } from "react";
import CustomTitleWidget from "../custom_widgets/custom_title/custom_title_widget";
import styles from "./app_info_display.module.css";
import AppPhotos from "./app_photos/app_photos";
import SubNav from "./sub_nav/sub_nav";
import Image from "next/image";
import dataContext from "../../providers/data_provider";

export default function AppInfoDisplay({ appName }) {
  // console.log(appName);
  const { data } = useContext(dataContext);
  return (
    <div>
      <div className={styles.background}>
        {data["valid_apps"].includes(appName) ? (
          data["completed_projects"].map((item) =>
            item["code_name"] == appName ? (
              <div className={styles.aa}>
                <div className={styles.main_container}>
                  <div>
                    <div className={styles.section_1_flex}>
                      <div
                        style={{
                          backgroundColor: item["background_color"],
                        }}
                        className={styles.section_1_part_1}
                      >
                        <Image
                          width={105}
                          height={105}
                          alt="app_logo"
                          src={item["logo_link"]}
                          className={styles.logo_img}
                        ></Image>
                      </div>
                      <div className={styles.section_1_part_2}>
                        {/* mian flex of snmall(short) info with Download button */}
                        <div className={styles.section_1_part_2_sub_flex}>
                          <div
                            className={styles.section_1_part_2_small_info_flex}
                          >
                            {item["information"].map((info, index) => {
                              return (
                                <div key={index}>
                                  <h3 className={styles.title}>
                                    {info["title"]}
                                  </h3>
                                  <p className={styles.description}>
                                    {info["description"]}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                          {/* this download button is only displayed in bigger screens */}
                          <a
                            className={`${styles.download_btn} ${styles.download_btn_desktop}`}
                            href={item["download_link"]}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <button
                            // className={`${styles.download_btn} ${styles.download_btn_desktop}`}
                            >
                              Download
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* this button is only displayed in small screens */}
                    <a
                      href={item["download_link"]}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button
                        className={[
                          `${styles.download_btn} ${styles.download_btn_mobile}`,
                        ]}
                      >
                        Download
                      </button>
                    </a>

                    <SubNav selectedProjectData={item}></SubNav>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )
          )
        ) : (
          <div>nothing available</div>
        )}
      </div>
    </div>
  );
}
