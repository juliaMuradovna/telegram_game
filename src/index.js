import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/styles.scss';
import Modal from 'react-modal';

const root = ReactDOM.createRoot(document.getElementById('root'));

Modal.setAppElement('#root');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
