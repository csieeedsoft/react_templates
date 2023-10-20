import React from "react";
import ReactDOM from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Album from "./album/Album"
import App from "./App";
import Checkout from "./checkout/Checkout";
import SignIn from "./sign-in/SignIn";
import SignInSide from "./sign-in-side/SignInSide";
import SignUp from "./sign-up/SignUp";
import Pricing from "./pricing/Pricing";
import Dashboard from "./dashboard/Dashboard";
import Blog from "./blog/Blog";
// wrap the whole app in StrictMode to get warnings about antipatterns
// wrap the whole app in context providers so the whole app can consume them
//                                                 V this is the non null assertion operator, which tells typescript that the value will not be nullish
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/album" element={<Album />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signinside" element={<SignInSide/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
  </React.StrictMode>,
);
