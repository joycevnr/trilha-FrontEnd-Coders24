import React from "react";
import ReactDOM from "react-dom"; // Importando ReactDOM para renderização no navegador
import App from "./App"; // Importando o componente principal da aplicação

// Renderizando o aplicativo dentro do elemento com id 'root'
ReactDOM.render(
  <React.StrictMode>
    {/*ferramenta para chegar possíveis más práticas no código react, caso encontre potênciais problemas, emite warnings -(apenas no ambiente de desenvolvimento)- roda duas vezes oq pode até ajudar a capturar bugs*/}
    <App /> {/* Renderizando o componente principal App dentro do StrictMode */}
  </React.StrictMode>,
  document.getElementById("root") // Selecionando o elemento HTML com id 'root'
);
