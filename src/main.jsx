import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import Loader from './components/Loader';

const Main = () => {
  return <React.StrictMode>{<App />}</React.StrictMode>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
