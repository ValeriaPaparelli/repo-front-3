import React from "react";

const Header = (props) => {
  const { user } = props;
  return (
    <div>
      <h1>Hola desde el header!</h1>
      <p>Hola {user.name}</p>
    </div>
  );
};

export default Header;
