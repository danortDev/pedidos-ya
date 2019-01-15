import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import Routes from 'app/routes';

import * as serviceWorker from './serviceWorker';

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <Routes />
  </StyletronProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
