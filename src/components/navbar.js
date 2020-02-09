import React from "react";

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

export default function navbar(props) {
  return (
  <div>
    
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
              
            
              <Tab  label="Projects" containerElement={ <Link to="/" className="item" /> } />
              <Tab  label="Resume" containerElement={<Link to="/resume" className="item" />} />
              <Tab label="Blog" containerElement={<Link to="/blog" className="item" />} />
              <IconButton  color="inherit" onClick={props.onToggleTheme}>
                <Brightness4Icon  />
              </IconButton>
              
            </Tabs>
          </Grid>
          
        </BrowserRouter>
      </Toolbar>
    </AppBar>
    

</div>
  );


}



