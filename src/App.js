import React from 'react';
import './App.css';

import Login from './Components/Login';

const initialState = {
  loggedIn: false,

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

  getHomeScreen() {
    return (
      <header className="App-header">
        Loign Success
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
