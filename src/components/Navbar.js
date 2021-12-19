import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setSignedIn,
  setUserData,
  setInput,
} from "../features/userSlice";
import Avatar from "@material-ui/core/Avatar";
import { GoogleLogout } from "react-google-login";

const Navbar = () => {
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  // Button Search Handler
  const handleSearch = () => {
    dispatch(setInput(inputVal));
  };

  // Logout Func
  const logout = () => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };
  return (
    <div className="navbar">
      <h1 className="navbar__header">Blog</h1>
      {isSignedIn && (
        <div className="blog__search">
          <input
            type="text"
            placeholder="Search a Blog"
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
          <button className="submit" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
      {!isSignedIn ? (
        <p>User Not Signed in 😔</p>
      ) : (
        <div className="navbar__userData">
          <div className="navbar__userInfo">
            <Avatar
              alt={userData?.name}
              src={userData?.imageUrl}
              className="navbar__user"
            />
            <h4 className="signedIn"> {userData?.givenName}</h4>
          </div>
          <GoogleLogout
            clientId="907245300679-hl4ehsh1vud55e7c4b0vpjkhbgf7e69s.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout__button"
              >
                Logout 😮
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
