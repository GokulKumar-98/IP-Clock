import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import Loader from './components/Loader';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  return (
    <React.StrictMode>{isLoading ? <Loader /> : <App />}</React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
