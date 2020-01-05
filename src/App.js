import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/blog.js";
import Resume from "./components/resume.js";
import Projects from "./components/projects.js";
import Navbar from "./components/navbar.js";
import Test from "./components/test.js";
export default function app() {
  return (
    <div>
  <Navbar />
  <Test/>
  </div>
  );


}

