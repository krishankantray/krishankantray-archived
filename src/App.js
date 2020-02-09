import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Blog from "./components/blog.js";
import Resume from "./components/resume.js";
import Projects from "./components/projects.js";
import Navbar from "./components/navbar.js";
import Test from "./components/test.js";
import { makeStyles, ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';



export default function App() {

  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  }); 

  const toggleTheme = ()=> {
    let newPaletteType = theme.palette.type ==='light' ? 'dark' : 'light' ;
    console.log('toggleTheme');
    setTheme({
      palette: {
        type: newPaletteType
      }
    })
  } ;


  const muitheme = createMuiTheme(theme) ;



  return (
    <div>
        <ThemeProvider theme={muitheme}> 
          <Navbar onToggleTheme={toggleTheme} />
        </ThemeProvider>
    </div>
  );


}

