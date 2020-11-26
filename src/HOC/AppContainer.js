import React, { useEffect } from "react";
import { withRouter } from "react-router";

const AppContainer = (props) => {
  useEffect(() => {
    props.history.listen((location, action) => {
      props.setroute((prev) => prev + 1);
    });
  });

  return <div>{props.children}</div>;
};
export default withRouter(AppContainer);
