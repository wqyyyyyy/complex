import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import {Provider} from 'react-redux';
import configStore from './configStore';

const initialState = {};
const store = configStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));
