import react from "react";

function AppDisplay(props) {
  return (
    <div>
      <div></div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
