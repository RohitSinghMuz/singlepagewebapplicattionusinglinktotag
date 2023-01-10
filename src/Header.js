import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <h4 style={{ margin: "15px" }}>
          <Link to="/">Home</Link>
        </h4>
        <h4 style={{ margin: "15px" }}>
          <Link to="about">About</Link>
        </h4>
        <h4 style={{ margin: "15px" }}>
          <Link to="service">Service</Link>
        </h4>
        <h4 style={{ margin: "15px" }}>
          <Link to="product">Product</Link>
        </h4>
      </div>
    </>
  );
};

export default Header;
