import { Component } from "react";
import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  state = {
    name: "Enzo Evangelista",
    counter: 0,
  };

  handlePClick = () => {
    this.setState({
      name: "Júnior",
    });
  };

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;

    this.setState({
      counter: counter + 1,
    });
  };

  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Esté é o link
          </a>
        </header>
      </div>
    );
  }
}

export default App;
