import React from "react";
import "./NotFound.css";
import useRedirectTo from "../../hooks/useRedirectTo";

const NotFound = () => {
  const { redirectTo } = useRedirectTo();

  const handleClick = () => {
    redirectTo("/test");
  };

  return (
    <div className="">
      <p>NotFound</p>
      <p onClick={handleClick}>Click here</p>
    </div>
  );
};

export default NotFound;
