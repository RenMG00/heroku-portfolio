import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './src/App';
import { UserProvider } from './src/context/UserProvider.js';
import { ParksCampsProvider } from './src/context/ParksCampsProvider.js';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ParksCampsProvider>
      <App />
      </ParksCampsProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

