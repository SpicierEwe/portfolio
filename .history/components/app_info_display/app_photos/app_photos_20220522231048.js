import react from "react";

export default function AppPhotos({ photoLinks }) {
  return (
    <div>
      <div className={styles.app_photos_container}>
        {photoLinks.map((photoLink, index) => {
          return (
            <div key={index}>
              <img src={photoLink}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
