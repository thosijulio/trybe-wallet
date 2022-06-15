import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpenseAction } from '../redux/actions';
import './TableExpenses.css';


class TableExpenses extends React.Component {
  render() {
    const { props: { expenses, removeExpense } } = this;
  
    return (
      <main className="table-expenses-section">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((expense) => {
              const {
                description,
                tag,
                method,
                value,
                id,
                exchangeSelectedRate,
              } = expense;

              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>
                    {
                      parseFloat(value)
                        .toLocaleString(
                          'pt-BR',
                          { currency: exchangeSelectedRate.code, style: 'currency' },
                        )
                    }</td>
                  <td>{ exchangeSelectedRate.name.split('/')[0] }</td>
                  <td>
                    {
                      parseFloat(exchangeSelectedRate.ask)
                      .toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })
                    }
                  </td>
                  <td>{
                    (
                      value * exchangeSelectedRate.ask
                    ).toLocaleString(
                    'pt-BR', { currency: 'BRL', style: 'currency' } 
                    ) }</td>
                  <td>{ exchangeSelectedRate.name.split('/')[1] }</td>
                  <td>
                    <i
                      className="fa-solid fa-trash"
                      onClick={ () => removeExpense(id) } 
                      title="Excluir despesa"
                    />
                  </td>
                </tr>
            )})}
          </tbody>
        </table>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpense: (payload) => dispatch(removeExpenseAction(payload)),
});

TableExpenses.propTypes = {
  expenses: PropTypes.array.isRequired,
  removeExpense: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(TableExpenses);
