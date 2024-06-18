import { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = { counter: 0, name: "", password: "" };
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <div>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter - 1 });
            }}
          >
            Diminuir
          </button>
          <button
            onClick={() => {
              this.setState({ counter: this.state.counter + 1 });
            }}
          >
            Aumentar
          </button>
        </div>
        <form>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
