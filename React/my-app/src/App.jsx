import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import outro from "./assets/images/outro.jpg";
import AssimQueAcaba from "./assets/images/AssimQueAcaba.jpg";
import Principe from "./assets/images/Principe.jpg";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  /*constructor() {
    super() //para herdar da classe mãe - React.Component - posso colocar nele atributos
  }*/

  render() {
    return (
      //não povo retornar no método render duas tags, só pode retornar uma tag, por isso que tudo tem que colocar dentro de um fragment <></> ou div
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <section id="articles">
            <Article
              title="É Assim que Acaba"
              provider="Colleen Hoover"
              description=" É assim que acaba é o romance mais pessoal da carreira de Colleen Hoover, discutindo temas como violência doméstica e abuso psicológico de forma sensível e direta. "
              thumbnall={AssimQueAcaba}
            />

            <Article
              title="O Pequeno Príncipe"
              provider="Antoine de Saint-Exupéry"
              description="Nesta história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma aventura filosófica e poética através de planetas que encerram a solidão humana."
              thumbnall={Principe}
            />

            <Article
              title="1984"
              provider="George Orwell"
              description="Publicada originalmente em 1949, a distopia futurista 1984 é um dos romances mais influentes do século XX, um inquestionável clássico moderno. Lançada poucos meses antes da morte do autor, é uma obra magistral que ainda se impõe como uma poderosa reflexão ficcional sobre a essência nefasta de qualquer forma de poder totalitário."
              thumbnall={outro}
            />
          </section>
          <Counter />
        </main>
      </>
    );
  }
}

export default App;
