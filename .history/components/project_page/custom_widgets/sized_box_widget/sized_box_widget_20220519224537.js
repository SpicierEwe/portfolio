import react from "react";

function SizedBox({ backgroundColor = "#223c63" , height: 1.5rem; }) {
  return (
    <div
      style={{ backgroundColor: { backgroundColor } }}
      className={styles.sized_box}
    ></div>
  );
}
/* sized box  */
// .sized_box {
// /* background-color: #223c63; */
//     height: 1.5rem;
//   }
