import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome to Fairtailen Homepage',
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{this.state.title}</p>
          <button
            onClick={() =>
              this.setState({ title: 'Built by: Kinga,Berk,Hanna and Samuel' })
            }
          >
            Click Me for Message
          </button>
        </header>
      </div>
    );
  }
}

export default App;
