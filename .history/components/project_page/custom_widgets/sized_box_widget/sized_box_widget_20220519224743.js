import react from "react";

export default function SizedBox({
  backgroundColor = "#223c63",
  height = "1.5rem",
}) {
  return (
    <div
      style={{ backgroundColor: { backgroundColor }, height: { height } }}
    ></div>
  );
}
