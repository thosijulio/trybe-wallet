import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WalletHeader.css';

class WalletHeader extends React.Component {
  render() {
    const { props: { email, totalExpense } } = this;

    return (
      <header className="wallet-header">
        <i className="fa-solid fa-wallet fa-2xl" />
        <section className="wallet-resume-section">
          <h4>{`Email: ${ email }`}</h4>
          <h4>{`Despesa Total: ${ totalExpense.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' }) }`}</h4>
        </section>
      </header>
    )
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpense: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpense: state.wallet.totalExpense,
})

export default connect(mapStateToProps)(WalletHeader);
