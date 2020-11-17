import React, { useState } from "react";
import Loading from "./Loading/Loading";
import HomePage from "./components/HomePage/HomePage";
// import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    <div className="App">
      <Loading />
      <HomePage />
    </div>
    // </Router>
  );
}

export default App;
