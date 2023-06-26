import React from "react";

const Header = ({ randomColor }) => {
  return (
    <div className="container">
      <div
        style={{
          fontFamily: "fantasy",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "2000",
          width: "100vw",
          textAlign: "center",
          fontSize: "2rem",
          color: randomColor,
        }}
        className=" fw-bold p-5 "
      >
        &#10094; Inspiro Bot &#47; &#10095;
      </div>
    </div>
  );
};

export default Header;
