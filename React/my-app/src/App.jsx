import React from 'react';

class App extends React.Component{
  /*constructor() {
    super() //para herdar da classe mãe - React.Component - posso colocar nele atributos
  }*/

  render(){
    return (
      <div className="App">
        <header>
          <nav id="navbar">
            <div className="nav-brand">
              <img src="" alt="" />
              <h1>Space Flight News</h1>
            </div>
          </nav>
        </header>
      </div>
    );
  } 
}

export default App;
