import React, { Component } from 'react';

// the holdings box will pull which stocks the user has purchased.
// awaiting how to access this information from backend

class HoldingsBox extends Component {
  constructor(props) {
    super(props);
  }
  // populates from the state.stocks array
  render() {
    return (
      <div id="holdingsBox" className="innerBox darkInner">
        {this.props.stocks.map((el, i) => {
          return <div key={i} className="holdings" onClick={ () => this.props.selectStock(el.name) }>
            {el.name}
            <div className="valueItems">Valued ${el.avg_value} | Owned: {el.amount_owned}</div>
          </div>
        })}
      </div>
    );
  }
}
export default HoldingsBox;