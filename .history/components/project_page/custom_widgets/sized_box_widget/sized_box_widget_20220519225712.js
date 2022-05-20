import react from "react";

function SizedBox({ backgroundColor, height }) {
  return (
    <div
      style={{
        backgroundColor: { backgroundColor },
        height: { height },
      }}
    ></div>
  );
}

export default SizedBox;
