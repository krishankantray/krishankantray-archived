import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makeStyles, ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import * as serviceWorker from './serviceWorker';


const darkTheme = createMuiTheme({
    palette: {
      // Switching the dark mode on is a single property value change.
      type: 'dark',
    },
  });

ReactDOM.render(

<ThemeProvider theme={darkTheme}>
<App />
</ThemeProvider>

, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
