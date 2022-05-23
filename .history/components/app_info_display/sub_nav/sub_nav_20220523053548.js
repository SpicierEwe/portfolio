import react from "react";

export default function SubNav(props) {
  return (
    <div>
      <div>
        {/* sub nav  */}
        <ul className={sub_nav_flex}>
          <div>
            <li>
              <a>Photos</a>
            </li>
          </div>
          <li>
            <a>Description</a>
          </li>
        </ul>

        {/* app photos display */}

        {/* <AppPhotos
                  photoLinks={AppsInformation[appName]["photo_links"]}
                ></AppPhotos> */}
      </div>
    </div>
  );
}
