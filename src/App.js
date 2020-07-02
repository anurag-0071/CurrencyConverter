import React from 'react';
import './App.css';

import Login from './Components/Login';
import HomePage from './Components/HomePage';

const initialState = {
  loggedIn: false,
  baseCurrency: "",
}
class App extends React.Component {

  constructor() {
    super();
    this.state = initialState;
  }

  doLogin() {
    this.setState({
      loggedIn: true
    })
  }

  setBaseCurrency(value) {
    this.setState({
      baseCurrency: value
    })
  }

  getHomeScreen() {
    return (
      <header className="App-header">
        <HomePage setBaseCurrency={this.setBaseCurrency.bind(this)} />
      </header>
    )
  }

  getLoginScreen() {
    return (
      <header className="App-header">
        <Login login={this.doLogin.bind(this)} />
      </header>
    )
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
        {this.state.loggedIn ? this.getHomeScreen() : this.getLoginScreen()}
        {/* </header> */}
      </div>
    );
  }
}

export default App;
