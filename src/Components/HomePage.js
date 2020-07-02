import React from 'react';


class HomePage extends React.Component {

  constructor() {
    super();
    this.state = {
      inputVal: "",
    }
  }

  onChange(e) {
    this.setState({
      inputVal: e.target.value.toUpperCase()
    })
  }

  setBaseCurrency() {
    this.props.setBaseCurrency(this.state.inputVal);
  }

  render() {
    return (
      <div className="Home Modal">
        <div className="HomeModalLabel">
          Select Your Base Currency
        </div>
        {/* <div className="HomeModalImput"> */}
        <input
          className="HomeModalImput"
          value={this.state.inputVal}
          onChange={this.onChange.bind(this)}
          placeholder={"Currency Code"}
        >

        </input>
        {/* </div> */}
        <div className="HomeModalButton">
          <button
            style={{
              color: "white",
              backgroundColor: "black",
              width: "20vw",
              height: "50px",
              fontSize: "1em"
            }}
            onClick={this.setBaseCurrency.bind(this)}
          >
            Next
          </button>
        </div>
      </div >
    )
  }

}

export default HomePage;