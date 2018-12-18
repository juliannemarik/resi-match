// EXTERNAL IMPORTS
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'

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
      main: '#87C6E6'
    },
  },
  status: {
    danger: 'orange',
  },
  typography: {
    useNextVariants: true,
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
