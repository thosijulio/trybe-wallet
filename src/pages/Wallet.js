import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddExpense from '../components/AddExpense';
import TableExpenses from '../components/TableExpenses';
import WalletHeader from '../components/WalletHeader';

class Wallet extends React.Component {
  render() {
    const { props: { email } } = this;

    return email ? (
      <>
        <WalletHeader />
        <AddExpense />
        <TableExpenses />
      </>
    ) :
    <Navigate to="/" />
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
}


const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
