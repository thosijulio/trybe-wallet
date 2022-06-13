import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormChange({ type, value }) {
    const { state: { email, password }, validateEmail, validatePassword } = this;

    this.setState({
      [type]: value,
    });

    // eslint-disable-next-line no-undef
    const button = document.querySelector('.login-main-section a');
    
    if (validateEmail(email) && validatePassword(password)) {
      button.style.pointerEvents = 'auto';
      button.style.backgroundColor = '#3F3618';
    } else {
      button.style.pointerEvents = 'none';  
    }
  }

  handleFormSubmit() {
    const { validateEmail, validatePassword } = this;

    if ( validateEmail && validatePassword) {
      console.log('teste');
    } else {
        // eslint-disable-next-line no-undef
        alert('Favor preencher usuário e senha.');
    }
  }

  validateEmail(email) {
    const regexValidation = /\S+@\S+\.\S+/;
    return regexValidation.test(email);
  }

  validatePassword(password) {
    return password.length >= 6;
  }

  render() {
    const { state: { email, password }, handleFormChange, handleFormSubmit } = this;
    return (
      <main className="login-main-section">
        <form>
          <i className="fa-solid fa-wallet fa-5x" />
          <h1>Trybe Wallet</h1>
          <input
            onChange={ ({ target }) => handleFormChange(target) }
            type="email"
            placeholder="Email"
            required
            value={ email }
          />
          <input
            onChange={ ({ target }) => handleFormChange(target) }
            type="password"
            placeholder="Senha"
            required
            value={ password }
          />
          <Link onClick={ handleFormSubmit } to="/carteira">Entrar</Link>
        </form>
      </main>
    )
  }
}

export default Login;
