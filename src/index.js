import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './global'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// reportWebVitals();