import React from 'react';
import './App.css';

import Login from './Components/Login';
import BaseCurrency from './Components/BaseCurrency';
import AddCurrency from './Components/AddCurrency';

const initialState = {
  loggedIn: false,
  baseCurrency: "",
  comparisionCurrencies: [],
  currencies: [],
  currentPage: "", // BaseCurrency, AddCurrency, HomePage
}
class App extends React.Component {

  constructor() {
    super();
    this.state = initialState;
  }

  doLogin() {
    this.setState({
      loggedIn: true,
      currentPage: "BaseCurrency"
    })
  }

  setBaseCurrency(value) {
    this.setState({
      baseCurrency: value,
      currentPage: "AddCurrency"
    });
  }

  getBaseCurrencyPage() {
    return (
      <BaseCurrency baseCurrency={this.state.baseCurrency} setBaseCurrency={this.setBaseCurrency.bind(this)} />
    )
  }

  addCurrency(value) {
    const currencies = this.state.currencies;
    currencies.push(value);
    this.setState({
      currencies
    })
  }

  goHome() {
    this.setState({
      currentPage: "HomePage"
    })
  }

  getAddCurrencyPage() {
    return (
      <AddCurrency
        baseCurrency={this.state.baseCurrency}
        addCurrency={this.addCurrency.bind(this)}
        goHome={this.goHome.bind(this)}
      />
    )
  }

  getHomePage() {

  }

  getView() {
    switch (this.state.currentPage) {
      case "BaseCurrency":
        return this.getBaseCurrencyPage();

      case "AddCurrency":
        return this.getAddCurrencyPage();

      case "HomePage":
        return this.getHomePage();
    }
  }

  getLoginScreen() {
    return (
      <Login login={this.doLogin.bind(this)} />
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.loggedIn ? this.getView() : this.getLoginScreen()}
        </header>
      </div>
    );
  }
}

export default App;
