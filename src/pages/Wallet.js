import React from 'react';
import { connect } from 'react-redux';
import AddExpense from '../components/AddExpense';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    return(
      <>
        <WalletHeader />
        <AddExpense />
      </>
    )
  }
}

export default connect()(Wallet);
