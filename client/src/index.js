import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {theme} from './theme'
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './Reducers/rootReducer'


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);