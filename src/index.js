import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'app/store';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { MuiThemeProvider } from '@material-ui/core/styles';
import materialUITheme from 'configs/material-ui';
import Routes from 'app/routes';
import * as serviceWorker from './serviceWorker';

// global css
import './css/modules/reset.css';
import './css/modules/typography.css';

const engine = new Styletron();

ReactDOM.render(
  <Provider store={store}>
    <StyletronProvider value={engine}>
      <MuiThemeProvider theme={materialUITheme}>
        <Routes />
      </MuiThemeProvider>
    </StyletronProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
