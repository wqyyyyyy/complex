import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import configStore from './configStore';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './configTheme';

const initialState = {};
const store = configStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>, 
  document.getElementById('root')
  );
