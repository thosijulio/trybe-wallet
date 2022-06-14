import React from 'react';
import { connect } from 'react-redux';

class AddExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      expense: {
        value: "0",
        description: "",
        currency: "",
        method: "Dinheiro",
        tag: "Alimentação",
        exchangeRates: {},
      },
      currencies: [],
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentDidMount() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((result) => result.json())
      .then((data) => {
        const currencies = [];
        const exchangeRates = {};

        Object.keys(data).forEach((currency) => {
          if (currency !== 'USDT') {
            currencies.push(data[currency]);
            exchangeRates[currency] = data[currency];
          }
        });
        
        this.setState((prevState) => ({
          currencies,
          expense: {
            ...prevState.expense,
            exchangeRates,
          }
        }));
      });
  }

  handleFormChange({ id, value }) {
    this.setState((prevState) => ({
      ...prevState,
      expense: {
        ...prevState.expense,
        [id]: value,
      }
      })
    );
  }

  render() {
    const {
      handleFormChange,
      state: {
        expense: {
          description,
          value,
        },
        currencies,
      },
    } = this;

    return (
      <form className="add-expense-form">
        <label htmlFor="value">
          Valor:
          <input id="value" onChange={ ({ target }) => handleFormChange(target) } type="number" value={ value } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input id="description" onChange={ ({ target }) => handleFormChange(target) } type="text" value={ description } />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select id="currency" onChange={ ({ target }) => handleFormChange(target) }>
            {
              currencies.map(({ code }, index) => (
                <option key={ index } value={ code }>{code}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select id="method" onChange={ ({ target }) => handleFormChange(target) }>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select id="tag" onChange={ ({ target }) => handleFormChange(target) }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar Despesa</button>
      </form>
    )
  }
}

export default connect()(AddExpense);
