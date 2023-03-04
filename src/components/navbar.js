import React from "react";
import "../styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
       <label className="search">
                    <input id="search" placeholder="apps,games..." />
                    </label>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
           Gamming Cart
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
      
    </nav>
    
  );
};

export default Navbar;
