import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import makeMirageServer from './mirage';

const useMirage = process.env.REACT_APP_USE_MIRAGE;
const isDevelopment = process.env.NODE_ENV === 'development';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

if (useMirage && isDevelopment) {
  makeMirageServer({ environment: 'development' });
}

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
