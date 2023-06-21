import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DeviceContextProvider from './context/DeviceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DeviceContextProvider>
      <App />
    </DeviceContextProvider>
  </React.StrictMode>
);
