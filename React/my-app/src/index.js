import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>{/*ferramenta para chegar possíveis más práticas no código react, caso encontre potênciais problemas, emite warnings -(apenas no ambiente de desenvolvimento)*/}
    <App />
  </React.StrictMode>
);
