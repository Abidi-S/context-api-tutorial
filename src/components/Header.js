import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context";
import "../styles.css";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <span className="header">React Context API Tutorial</span>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
