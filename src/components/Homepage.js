import React from "react";
import GoogleLogin from "react-google-login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <div className="home__page">
      <h2>📗</h2>
      <h1>A Readers favourite place!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex
        odio, dolore, sint a consequuntur mollitia nemo voluptate enim sequi
        cupiditate eius exercitationem tempore vitae fuga quia odit. Error
        officiis similique harum nesciunt numquam magni eaque est ipsum odio
        nostrum.
      </p>
      <GoogleLogin
        clientId="907245300679-hl4ehsh1vud55e7c4b0vpjkhbgf7e69s.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="login__button"
          >
            Login with Google
          </button>
        )}
        onSuccess={login}
        onFailure={login}
        isSignedIn={true}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Homepage;
