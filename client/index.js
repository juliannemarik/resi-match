// EXTERNAL IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import './socket'

// MATERIAL UI IMPORTS
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// INTERNAL IMPORTS
import history from './history'
import store from './store'
import App from './app'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242'
    },
    secondary: {
      main: '#1e88e5'
    },
  },
  status: {
    danger: 'orange',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
)
