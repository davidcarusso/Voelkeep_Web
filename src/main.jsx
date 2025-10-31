import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Use StrictMode only in development
const root = ReactDOM.createRoot(document.getElementById('root'));

if (import.meta.env.DEV) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(<App />);
}
