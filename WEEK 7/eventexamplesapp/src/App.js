import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      message: ''
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, this.sayHello);
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    this.setState({ message: 'Hello! Counter increased successfully.' });
  };

  sayWelcome = (msg) => {
    this.setState({ message: msg });
  };

  handleClick = (e) => {
    this.setState({ message: 'I was clicked' });
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>React Event Handling Examples</h1>
        
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        
        <h2>Welcome Message</h2>
        <button onClick={() => this.sayWelcome('Welcome to React Event Handling!')}>Say Welcome</button>

        <h2>Synthetic Event Example</h2>
        <button onClick={this.handleClick}>OnPress</button>

        <p><strong>Message:</strong> {this.state.message}</p>

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;