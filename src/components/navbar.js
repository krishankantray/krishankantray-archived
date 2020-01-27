import React, { useState, Component } from "react";

import Blog from "./blog.js";
import Resume from "./resume.js";
import Projects from "./projects.js";

import { BrowserRouter, Route, Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Grid,
  Tabs,
  Tab,
  MenuItem,
  Menu
} from "@material-ui/core";
import ComputerIcon from "@material-ui/icons/Computer";
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { render } from "@testing-library/react";
import { makeStyles, ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
    palette: {
      // Switching the dark mode on is a single property value change.
      type: "dark",
      
    },
  });


export default function navbar() {
  return (
  <div>
    <ThemeProvider theme={darkTheme}>
    <AppBar color="default" title="Krishankant Ray" position="fixed" alignItems='center' direction="row" >
      <Toolbar>
        <BrowserRouter>
          <Route exact path="/" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />

          

          <Grid alignItems='center' direction="row">
            <Tabs>
              <tab>
                <IconButton  color="inherit" >
                  <MenuIcon fontSize='large' />
                </IconButton>
              </tab>
              <tab>
                <IconButton color="inherit" >
                  <ComputerIcon fontSize='large' />
                </IconButton>
              </tab>
              
              
            </Tabs>
            
            </Grid>

            
              <Typography variant="h5" >
                Krishankant Ray
              </Typography>
              

            <div style={{flex:1}}></div>

            <Grid>

            <Tabs>
              
            
              <Tab value={0} label="Projects" containerElement={ <Link to="/" className="item" /> } />
              <Tab value={1} label="Resume" containerElement={<Link to="/resume" className="item" />} />
              <Tab value={2} label="Blog" containerElement={<Link to="/blog" className="item" />} />
              <IconButton  color="inherit" >
                <Brightness4Icon  />
              </IconButton>
              
            </Tabs>
          </Grid>
          
        </BrowserRouter>
      </Toolbar>
    </AppBar>
    </ThemeProvider>

</div>
  );


}



