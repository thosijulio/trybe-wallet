import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpensesAction } from '../redux/actions';
import getCurrencies from '../services/getCurrencies';
import './AddExpense.css';

class AddExpense extends React.Component {
  constructor() {
    super();

    this.INITIAL_EXPENSE = {
      value: "",
      description: "",
      currency: "USD",
      method: "Dinheiro",
      tag: "Alimentação",
    }

    this.state = {
      expense: this.INITIAL_EXPENSE,
      currencies: [],
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    getCurrencies()
      .then((currencies) => {
        this.setState((prevState) => ({
          expense: prevState.expense,
          currencies,
        }));
      })
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

  submitForm() {
    const {
      INITIAL_EXPENSE,
      props: {
        expenses,
        sendExpenseAction,
      },
      state: {
        expense,
      },
    } = this;

    getCurrencies()
      .then((currencies) => {
        const { props: { totalExpense } } = this;
        
        const exchangeSelectedRate = currencies
          .filter((exchange) => exchange.code === expense.currency)[0];
        
        const valueConverted = expense.value * exchangeSelectedRate.ask;

        const newExpenses = [
          ...expenses,
          {
            ...expense,
            exchangeRates: currencies,
            id: expenses.length + 1,
            exchangeSelectedRate,
          },
        ];
        const newTotal = parseFloat(totalExpense) + parseFloat(valueConverted)
        sendExpenseAction({expenses: newExpenses, totalExpense: newTotal });
      });

    this.setState((prevState) => ({
      ...prevState,
      expense: INITIAL_EXPENSE,
    }))
  }

  render() {
    const {
      handleFormChange,
      submitForm,
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
        <button id="btn-submit-form" onClick={ submitForm } type="button">Adicionar Despesa</button>
      </form>
    )
  } 
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  totalExpense: state.wallet.totalExpense,
});

const mapDispatchToProps = (dispatch) => ({
  sendExpenseAction: (payload) => dispatch(addExpensesAction(payload)),
});

AddExpense.propTypes = {
  expenses: PropTypes.array.isRequired,
  sendExpenseAction: PropTypes.func.isRequired,
  totalExpense: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
