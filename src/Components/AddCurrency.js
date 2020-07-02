import React from 'react';

class AddCurrency extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      currencies: []
    }
  }

  onChange(e) {
    this.setState({
      inputVal: e.target.value.toUpperCase()
    })
  }

  goHome() {
    this.props.goHome();
  }

  addCurrency() {
    if (this.state.inputVal) {
      this.props.addCurrency(this.state.inputVal)
      this.setState({
        inputVal: ""
      })
    }
  }

  render() {
    return (
      <div className="AddCurrency Modal">
        <div className="BaseCurrency">
          Base Currency: {this.props.baseCurrency}
        </div>
        <div className="AddCurrencyView">
          <div className="AddCurrencyLabel">
            Select Currencies to Compare
          </div>
          <div className="AddCurrencyModal">
            <div className="AddCurrencyInput">
              <input
                className="AddCurrencyModalImput"
                value={this.state.inputVal}
                onChange={this.onChange.bind(this)}
                placeholder={"Currency Code"}
              >

              </input>
            </div>
            <div className="AddCurrencyButton">
              <button className="AddCurrencyButton" onClick={this.addCurrency.bind(this)}>
                + ADD
              </button>
            </div>
          </div>
        </div>
        <div className="HomeButton">
          <button
            style={{
              color: "white",
              backgroundColor: "black",
              width: "20vw",
              height: "50px",
              fontSize: "1em"
            }}
            onClick={this.goHome.bind(this)}
          >
            Next
          </button>
        </div>
      </div>
    )
  }

}

export default AddCurrency;