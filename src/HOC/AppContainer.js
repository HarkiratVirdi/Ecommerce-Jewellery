import React, { useEffect } from "react";
import { withRouter } from "react-router";

const AppContainer = (props) => {
  useEffect(() => {
    props.history.listen((location, action) => {
      // if (location.pathname !== "/gallery") {
      props.setroute((prev) => prev + 1);
      // console.log("location", location);
      // console.log(`route ${location.pathname}`);
      // }
    });
  });

  return <div>{props.children}</div>;
};
export default withRouter(AppContainer);
