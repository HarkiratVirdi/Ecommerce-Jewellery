import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Loading from "./components/Loading/Loading.js";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { motion, AnimatePresence } from "framer-motion";

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
        <Router>
          <AnimatePresence>
            <Switch>
              <div className="App">
                <Loading loading={loading} />
                <Nav loading={loading} />
                <main>
                  <Route
                    exact
                    path="/"
                    component={HomePage}
                    loading={loading}
                  />
                </main>
              </div>
            </Switch>
          </AnimatePresence>
        </Router>
      )}
    </>
    // </Router>
  );
}

export default App;
