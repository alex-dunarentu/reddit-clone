import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
//firebase
const Header = ({ currentUser }) => {
  return (
    <div className="HeaderComponent">
      <Link to="/">
        <h1 className="HeaderTitle">reddit clone</h1>
      </Link>
      <ul className="UserOptions">
        {currentUser ? (
          <li className="User" onClick={() => auth.signOut()}>
            Sign Out
          </li>
        ) : (
          <Link to="/signin">
            <li className="User">Sign In</li>
          </Link>
        )}
        <Link to="/signup">
          <li className="User">Sign Up</li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
