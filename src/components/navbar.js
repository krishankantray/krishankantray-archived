import React from "react";

import Blog from "./blog.js";
import Resume from "./resume.js";
import Projects from "./projects.js";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

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
  Menu,
  makeStyles
} from "@material-ui/core";
import ComputerIcon from "@material-ui/icons/Computer";
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';



const useStyles = makeStyles(theme=>({

  menuButton: {
    marginRight: theme.spacing(2)
  },

  drawer: {
    width: 240,
    flexShrink: 0,
    padding: theme.spacing(0, 1),
  },


  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },

}));






export default function Navbar(props) {
  const classes= useStyles(); 

  const [flip, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!flip);
  };

  const handleClickAway = () => {
    setOpen(false);
  };



  return (
  <div>
    
    <AppBar color="default" title="Krishankant Ray" position="fixed" alignItems='center' direction="row" >
      <Toolbar>
              <ClickAwayListener onClickAway={handleClickAway}>
                <IconButton  color="inherit" onClick={handleDrawer}>
                  <MenuIcon fontSize='large' />
                </IconButton>
                </ClickAwayListener>
             
                <IconButton color="inherit" >
                  <ComputerIcon fontSize='large' />
                </IconButton>
              

            
              <Typography variant="h5" >
                Krishankant Ray
              </Typography>
              

            <div style={{flex:1}}></div>

            

            <Tabs>
            <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Projects} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/resume" component={Resume} />
            </Switch> 
              <Tab value='one' label="Projects" to='/projects' component={Link} />
              <Tab value='two' label="Resume" to='/resume' component={Link} />
              <Tab value='three' label="Blog" to='/blog' component={Link} />
              <IconButton  color="inherit" onClick={props.onToggleTheme}>
                <Brightness4Icon  />
              </IconButton>
              </BrowserRouter>
            </Tabs>
          
       
        
      </Toolbar>
    </AppBar>
    <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={flip}
        
      >
        Hello How are you
    </Drawer>

    <main>
    <div className={classes.drawerHeader} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>

</div>
  );


}



