import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './utils';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import store from './app/store';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from '@mui/material';
// import 'bootstrap/dist/css/bootstrap.min.css';
const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      '.Toastify__toast-container--top-right': {
        top: '4em',
      },
    }}
  />
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <ToastContainer />
      {inputGlobalStyles}
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
