import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SearchWordProvider} from './component/context/SearchContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchWordProvider>
    <App />
    </SearchWordProvider>
  </React.StrictMode>
);

reportWebVitals();
