import React from "react";
import Nav from "../Nav/Nav";
import PageImage from "../PageImage";

function HomePage({ loading }) {
  return (
    <div>
      <Nav loading={loading} />
      <PageImage />
    </div>
  );
}

export default HomePage;
