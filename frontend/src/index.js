import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from './style/constants';
import { ThemeProvider } from "styled-components";
import App from './pages/App';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
