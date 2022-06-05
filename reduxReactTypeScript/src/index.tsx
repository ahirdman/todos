import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import store from './store/store';
import App from './App/App';
import './_base.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
