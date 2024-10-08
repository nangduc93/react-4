import React from "react";
import "./stale.css";

const Footer = ({ total }) => (
  <footer>
    <hr />
    <div>
      <h5 className="cart-total">
        total <span>${total}</span>
      </h5>
    </div>
    <button className="btn btn-hipster">clear cart</button>
  </footer>
);

export default Footer;
