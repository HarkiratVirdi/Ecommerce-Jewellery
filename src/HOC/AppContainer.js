import React, { useEffect } from "react";
import { withRouter } from "react-router";

const AppContainer = (props) => {
  useEffect(() => {
    props.history.listen((location, action) => {
      props.setroute((prev) => prev + 1);

      console.log("route Changed");
    });
  });

  return <div>{props.children}</div>;
};
export default withRouter(AppContainer);
