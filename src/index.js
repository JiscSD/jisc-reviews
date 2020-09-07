import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E85E13',
    },
    text: {
      light: '#D0E0F3', 
      main: '#00557F',
      dark: '#304A55'
    }, 
    outline: {
      main: '#EFEFEF'
    }, 
    backgrounds: {
      light: '#CADBEF', 
      main: '#00527A'
    }
  }, 
  typography: {
    h1: {
      fontSize: '1.3em', 
      fontWeight: '350',
    }, 
    h2: {
      fontSize: '2.5em', 
      fontWeight: '300', 
    }, 
    h3: {
      fontSize: '2.5em', 
      fontWeight: '300', 
    }, 
    h4: {
      fontSize: '1.7em', 
      fontWeight: '550', 
    },
    h5: {
      fontSize: '1.2em', 
      fontWeight: '650'
    }, 
    h6: {
      fontSize: '1em',
      fontWeight: '350'
    }, 
    body1: {
      fontSize: '.9em', 
      fontWeight: '400'
    },
    body2: {
      fontSize: '1em', 
      fontWeight: '500'
    }
  }
})

theme = responsiveFontSizes(theme)


ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


