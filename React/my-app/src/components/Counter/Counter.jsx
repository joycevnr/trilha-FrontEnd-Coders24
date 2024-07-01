import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();
    // this.contador = 10;
    this.state = { contador: 0, name: "" };
  }

  render() {
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
