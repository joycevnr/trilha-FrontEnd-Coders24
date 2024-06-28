import React from 'react';
import logoBook from "../../assets/images/logoBook.png";
//voltar uma pasta/ diretório: ../
import './styles.css'
class Navbar extends React.Component{
  /*constructor() {
    super() //para herdar da classe mãe - React.Component - posso colocar nele atributos
  }*/

  render(){
    return (
      <div className="App">
        <header>
          <nav id="navbar">
            <div className="nav-brand">
              <img src={logoBook} alt="" className='logo'/>
              <h1>Top Bestsellers</h1>
            </div>

            <ul className="nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/">Trending</a></li>
              <li><a href="/">Categories</a></li>
              <li><a href="/">About us</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  } 
}

export default Navbar;
