import React, { useState, useEffect } from "react";
import Loading from "./Loading/Loading";
import HomePage from "./components/HomePage/HomePage";
// import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line no-undef
  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    // <Router>
    <>
      {loading ? (
        <></>
      ) : (
        <div className="App">
          <Loading />
          <HomePage loading={loading} />
        </div>
      )}
    </>
    // </Router>
  );
}

export default App;
