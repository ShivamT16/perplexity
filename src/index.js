import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { LoginContext, LoginProvider } from './Context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

export { LoginContext }

root.render(
  <React.StrictMode>
    <LoginProvider>
    <App />
    </LoginProvider>
  </React.StrictMode>
);