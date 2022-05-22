import react from "react";

function aa(props) {
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

export default aa;
