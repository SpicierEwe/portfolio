import react from "react";

export default function AppPhotos({ photoLinks }) {
  return (
    <div>
      <div className={styles.app_photos_container}>
        {photoLinks.map((photoLink, index) => {})}
      </div>
    </div>
  );
}
