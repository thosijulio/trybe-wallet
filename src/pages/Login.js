import React from 'react';
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
    this.setState({
      [type]: value,
    });
  }

  handleFormSubmit() {
    const { state: { email, password } } = this;

    if (email === '' || password === '') {
      // eslint-disable-next-line no-undef
      alert('Favor preencher usuário e senha.');
    }
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
          <button onClick={ handleFormSubmit } type="button">Entrar</button>
        </form>
      </main>
    )
  }
}

export default Login;
