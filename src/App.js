import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { selectSignedIn } from "./features/userSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blogs from "./components/Blogs";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <>
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </>
  );
};

export default App;
