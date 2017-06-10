import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      myActualName: '',
      maybeMyName: '',
      maybeMyLocation: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      myActualName: this.state.maybeMyName,
      maybeMyName: '',
      maybeMyLocation: ''
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>DON'T PRESS THE BUTTON!</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h2>What's your name?</h2>
          <input 
            name="maybeMyName" 
            type="text" 
            onChange={this.handleChange}
            placeholder="name"
            value={this.state.maybeMyName}
          />
          <input 
            name="maybeMyLocation" 
            type="text" 
            onChange={this.handleChange} 
            placeholder="location"
            value={this.state.maybeMyLocation}
          />
          <input type="submit"/>
        </form>
        <Button name={this.state.myActualName}/>
      </div>
    );
  }
}

export default App;
