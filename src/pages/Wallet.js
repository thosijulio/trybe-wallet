import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return(
      <h1>Wallet</h1>
    )
  }
}

export default connect()(Wallet);
