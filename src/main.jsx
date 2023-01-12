import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className="flex flex-col">
      <div>Good morning</div>
      <div className="text-[60px]">5:27Am</div>
    </div>
  </React.StrictMode>
);
