import React from "react";
import "./header.styles.scss";
//firebase
const Header = () => {
  return (
    <div className="HeaderComponent">
      <h1 className="HeaderTitle">reddit clone</h1>
      <ul className="UserOptions">
        <li className="User">Log In</li>
        <li className="User">Sign Up</li>
      </ul>
    </div>
  );
};
export default Header;
