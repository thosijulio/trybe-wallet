import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './WalletHeader.css';

class WalletHeader extends React.Component {
  render() {
    const { props: { email } } = this;

    return (
      <header className="wallet-header">
        <i className="fa-solid fa-wallet fa-2xl" />
        <section className="wallet-resume-section">
          <h4>{`Email: ${ email }`}</h4>
          <h4>Despesa Total: 0 BRL</h4>
        </section>
      </header>
    )
  }
}

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  email: state.user.email,
})

export default connect(mapStateToProps)(WalletHeader);
