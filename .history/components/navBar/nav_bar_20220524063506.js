/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import react, { useContext } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdBrightnessMedium } from "react-icons/md";
import styles from "./nav_bar.module.css";
import MobileNavBarContext from "../../providers/context_provider";
import themeContext from "../../providers/theme_provider";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();
  const moblieNavBarCtx = useContext(MobileNavBarContext);

  const themeCtx = useContext(themeContext);

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
                  <Link
                    scroll={false}
                    href={"/#project_section"}
                    onEnded={() => {
                      router.replace(router.pathname);
                    }}
                  >
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>ABOUT</Link>
                </li>
                <li>
                  <Link href={"#"}>CONTACT</Link>
                </li>
              </div>
              <div className={styles.list_item_style}>
                {/* theming  */}
                {/* <li>
                  <a href={"#"}>
                    <MdBrightnessMedium
                      size={35}
                      onClick={() => {
                        themeCtx.isDark
                          ? themeCtx.setTheme("light")
                          : themeCtx.setTheme("dark");

                        console.log("its dark", themeCtx.isDark);
                      }}
                    ></MdBrightnessMedium>
                  </a>
                </li> */}
                {/* theming */}
                <li>
                  <Link href={"/under-development"}>MORE</Link>
                </li>
                <li>
                  <Link href={"/under-development"}>RESOURCES</Link>
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

// {
//   item1 = {
//     name: "PROJECTS",
//     link: "/",
//   },
//   item2 = {
//     name: "ABOUT",
//     link: "#",
//   },
//   item3 = {
//     name: "CONTACT",
//     link: "#",
//   },
// }
