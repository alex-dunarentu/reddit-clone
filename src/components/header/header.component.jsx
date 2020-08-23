import React from "react";
import "./header.styles.scss";
//firebase
const Header = () => {
  return (
    <div className="HeaderComponent">
      <h1>reddit clone</h1>
      <ul>
        <li>Log In</li>
        <li>Sign Up</li>
      </ul>
    </div>
  );
};
export default Header;
