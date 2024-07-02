import React from "react";

export class Counter extends React.Component {
  constructor() {
    console.log("Construindo a classe Counter!");
    super();
    // this.contador = 10;
    this.state = { contador: 0, name: "" };
  }
  componentDidMount(){
    console.log("O componente foi montado!");
  }

  render() {
    console.log("Renderizando o componente counter...");
    return (
      <div style={{ marginTop: "20px", marginLeft: "20px" }}>
        <h1>{this.state.contador}</h1>
        <div>
          {/* mudar o estado é com o método setState */}
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador - 1 });
            }}
            style={{ marginRight: "30px" }}>
            Diminuir
          </button>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador + 1 });
            }}>
            Aumentar
          </button>
        </div>
        <input
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <button>Enviar</button>
      </div>
    );
  }
}
