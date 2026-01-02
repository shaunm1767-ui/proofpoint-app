// C:\Users\Shaun\Desktop\proofpoint-web\src\index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/Dashboard.js'; // <- explicit .js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
