import React from "react";
import { Navigate } from "react-router-dom";

const Authmiddleware = (props) => {
  if (!localStorage.getItem("authUser")) {
    console.log('gggggggggggggggggggggggg')
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
  console.log('gggggggggggggggggggggggg eeeeeeeeee')
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Authmiddleware;