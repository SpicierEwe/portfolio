



export default function MobileNavBar(props){



    return(
        <div>
        <HiMenuAlt4
          onClick={() => {
            setDisplayMenuOverLay(true);
          }}
        ></HiMenuAlt4>
      </div>
      <div
        style={{ visibility: displayMenuOverLay ? "visible" : "hidden" }}
        className={styles.menu_overlay}
      >
        <div>
          <AiOutlineCloseCircle
            onClick={() => {
              displayMenuOverLay;
              setDisplayMenuOverLay(false);
            }}
            size={45}
            className={styles.menu_close_icon}
          ></AiOutlineCloseCircle>

          <div>
            <nav>
              <ul className={styles}>
                <div className={styles.nav}>
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
                <div className={styles.nav}>
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
        </div>
      </div>
    )
}