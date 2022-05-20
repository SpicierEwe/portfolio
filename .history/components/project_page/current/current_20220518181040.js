import React from "react";

import styles from "./current.module.css";

function Current(props) {
  const project_title = "ahadith Collection";
  const project_dis =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor justo ac erat lacinia, a iaculis felis faucibus. Integer sit amet ullamcorper dui, dapibus pulvinar mauris. Etiam at condimentum mi. Integer euismod velit aliquam nisl dapibus, ut lacinia nibh efficitur. In ultrices nibh sit amet nisl tristique, fringilla luctus sapien accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum id placerat velit, accumsan ultricies diam. Praesent tortor ante, mollis at ornare ornare, vehicula non leo. In nec placerat sapien, id aliquet turpis. Suspendisse mollis quis enim a egestas. Vivamus tellus est, consectetur ut sollicitudin sit amet, vehicula sit amet leo. Ut nibh ipsum, scelerisque eu fringilla ut, posuere eget velit. Nam vel libero posuere, tincidunt risus a, lacinia leo. Phasellus condimentum eget ipsum eget consequat. Sed vehicula id erat ac bibendum.";
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.current_project_info}>
          <h3>{project_title}</h3>
          <h3>{project_dis}</h3>
        </div>
        <div className={styles.current_project_logo}>
          <h3>icon</h3>
        </div>
      </section>
    </div>
  );
}

export default Current;
