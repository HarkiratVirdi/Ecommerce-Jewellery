import React, {useState, useRef, useEffect, useCallback } from "react";
import Nav from "./components/Nav/Nav";
import Shop from "./components/Shop/Shop";
import Loading from "./components/Loading/Loading.js";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { motion, AnimatePresence } from "framer-motion";
import {WindowSize} from "./components/Functions/WindowSize";

function App() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const size = WindowSize();
  const data = {
    ease: 0.07,
    curr: 0,
    prev: 0,
    rounded: 0,
  };

    useEffect(() => {
    setLoading(false);
  }, [loading]);

setTimeout(() => {
  setBodyHeight();
}, 0.1);
  const setBodyHeight = () => {
    document.body.style.height = `${containerRef.current.getBoundingClientRect().height}px`;
  };

  const smoothScroll = useCallback(() => {
    data.curr = window.scrollY;
    data.prev +=(data.curr - data.prev) * data.ease;
    data.rounded = Math.round(data.prev * 100) / 100;
    containerRef.current.style.transform = `translateY(-${data.rounded}px)`;
    requestAnimationFrame(() => smoothScroll()); 
  }, [data])

  useEffect(() => {
    requestAnimationFrame(() => smoothScroll());
  }, []);

// useEffect(() => {
//   setBodyHeight();
// }, [size.height]);

  return (
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
                <div className="scroll_container" ref={containerRef}>
                <main>
                  <Route
                    exact
                    path="/"
                    component={HomePage}
                    loading={loading}
                  />
                  <Route exact path="/shop" component={Shop} />
                </main>
                </div>
              </div>
            </Switch>
          </AnimatePresence>
        </Router>
      )}
    </>
  );
}

export default App;
