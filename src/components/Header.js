import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => {
  return (
    <div>
      <span className="header">React Context API Tutorial</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Card</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
