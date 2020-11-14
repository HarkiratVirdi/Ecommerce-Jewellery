import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Loading from "./Loading/Loading";
import PageImage from "./components/PageImage";

function App() {
  return (
    <div className="App">
      <Loading />
      <Nav />
      <PageImage />
    </div>
  );
}

export default App;
