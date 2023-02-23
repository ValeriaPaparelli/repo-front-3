import React from "react";

const Main = ({ children }) => {
  return (
    <div>
      <h1>Main wrapper</h1>
      <div>{children}</div>
    </div>
  );
};

export default Main;
