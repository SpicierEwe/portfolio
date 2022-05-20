import react from "react";

function SizedBox({ backgroundColor, height }) {
  var customBackgroundColor =
    backgroundColor != null ? backgroundColor : "#223c63";
  var customHeight = height != null ? height : "#223c63";
  return (
    <div
      style={{
        backgroundColor: { customBackgroundColor },
        height: { customHeight },
      }}
    ></div>
  );
}

export default SizedBox;
