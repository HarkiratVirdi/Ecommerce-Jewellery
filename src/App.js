import React, {useState, useRef, useEffect, useCallback } from "react";
import Nav from "./components/Nav/Nav";
import Shop from "./components/Shop/Shop";
import Loading from "./components/Loading/Loading.js";
import { Link, BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { motion, AnimatePresence } from "framer-motion";
import {WindowSize} from "./components/Functions/WindowSize";
import {ScrollTop} from "./components/Functions/ScrollTop";
import AppContainer from "./HOC/AppContainer";

function App() {
  const loading = true;
  let containerRef = useRef(null);
  const [route, setroute] = useState(0);
  console.log(route);
  let size = WindowSize();
  const data = {
    ease: 0.065,
    curr: 0,
    prev: 0,
    rounded: 0,
  };


  useEffect(() => {      
      requestAnimationFrame(() => smoothScroll());
      setBodyHeight();
  }, []);

    useEffect(() => {
    setBodyHeight();
    ScrollTop();
  }, [size.height, route])


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





  return <Router>
          <AnimatePresence>
            <Switch>
              <div className="App">
                <Loading loading={loading} />
                <Nav loading={loading} />
                <div className="scroll_container" ref={containerRef}>
                <AppContainer route={route} setroute={setroute}>        
                  <Route
                    exact
                    path="/"
                    component={HomePage}
                    loading={loading}
                  />
                  <Route exact path="/shop" component={Shop} />
                </AppContainer>  
                </div>
              </div>
            </Switch>
          </AnimatePresence>
        </Router>
}

export default withRouter(App);
