import React from "react";


const Header =()=>{
    return(
      <div className = "Header">
      <div className = "logo-container">
      <img className = "logo" src="Food\src\assets\logo.jpg" alt="this logo" />

      </div>

      <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>

      </div>
      </div>
    );
    };

    export default Header;