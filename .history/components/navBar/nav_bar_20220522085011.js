/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import react, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdBrightnessMedium } from "react-icons/md";
import styles from "./nav_bar.module.css";
import MobileNavBarContext from "../../providers/context_provider";

function NavBar({
  item1 = {
    name: "PROJECTS",
    link: "#",
  },
  item2 = {
    name: "ABOUT",
    link: "#",
  },
  item3 = {
    name: "CONTACT",
    link: "#",
  },
}) {
  const moblieNavBarCtx = useContext(MobileNavBarContext);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.left}>
          {/* logo is here */}
          <Link href={"/"}>
            <img src={"/logo.svg"}></img>
          </Link>
        </div>
        <div className={styles.right}>
          {/* 
***************************************************************
***************************************************************

 this the the menu icon ddisplayed for small devices START

***************************************************************
***************************************************************
  */}
          {/* here is the just the icon of the mobile nav which is displayed on small devices */}
          <div className={styles.mobile_nav_container}>
            <div>
              {/* mobile menu icon */}
              <HiMenuAlt4
                size={25}
                className={styles.mobile_menu_icon}
                onClick={() => {
                  // console.log("nav open");
                  // console.log(moblieNavBarCtx.isMobileNavOpen);
                  moblieNavBarCtx.setOpenMObileNav(true);
                  document.body.style.overflowY = "hidden";
                }}
              ></HiMenuAlt4>
            </div>
          </div>

          {/* 
***************************************************************
***************************************************************

 this the the menu icon ddisplayed for small devices END

***************************************************************
***************************************************************
  */}
          <nav className={styles.desktop_nav}>
            <ul className={styles.nav_corner_flex}>
              <div className={styles.list_item_style}>
                <li>
                  <a href={item1.link}>{item1.name}</a>
                </li>
                <li>
                  <a href={item2.link}>{item2.name}</a>
                </li>
                <li>
                  <a href={item3.link}>{item3.name}</a>
                </li>
              </div>
              <div className={styles.list_item_style}>
                {/* theming  */}
                <li>
                  <a href={"#"}>
                    <MdBrightnessMedium></MdBrightnessMedium>
                  </a>
                </li>
                {/* theming */}
                <li>
                  <a href={"#"}>MORE</a>
                </li>
                <li>
                  <a href={"#"}>RESOURCES</a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
