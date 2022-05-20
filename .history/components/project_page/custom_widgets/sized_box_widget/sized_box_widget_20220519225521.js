import react from "react";

export default function SizedBox(
  backgroundColor = "#223c63",
  height = "1.5rem"
) {
  var customBackgroundColor =
    backgroundColor != null ? backgroundColor : "#223c63";
  var customBackgroundColor =
    backgroundColor != null ? backgroundColor : "#223c63";
  return (
    <div
      style={{ backgroundColor: { customBackgroundColor }, height: { height } }}
    ></div>
  );
}
