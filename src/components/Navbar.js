import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="navbar">
      <h1 className="navbar__header">BlogMania</h1>
      {isSignedIn ? (
        <div className="blog__search">
          <input type="text" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
