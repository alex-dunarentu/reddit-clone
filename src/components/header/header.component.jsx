import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
//import { auth } from "../../firebase/firebase.utils";

const Header = (/* { currentUser } */) => {
  return (
    <div className="HeaderComponent">
      <Link to="/reddit-clone">
        <h1 className="HeaderTitle">reddit clone</h1>
      </Link>
      <ul className="UserOptions">
        {/* {currentUser ? (
          <li className="User" onClick={() => auth.signOut()}>
            Sign Out
          </li>
        ) : (
          <Link to="/signin">
            <li className="User">Sign In</li>
          </Link>
        )} */}
        <Link to="/reddit-clone/signin">
          <li className="User">Sign In</li>
        </Link>
        <Link to="/reddit-clone/signup">
          <li className="User">Sign Up</li>
        </Link>
      </ul>
    </div>
  );
};
export default Header;
