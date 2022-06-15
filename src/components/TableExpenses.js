import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './TableExpenses.css';

class TableExpenses extends React.Component {
  render() {
    const { props: { expenses } } = this;
  
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
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map(({
                description,
                tag,
                method,
                value,
                currency,
                id,
                exchangeRates,
              }) => {
                const exchangeSelectedRate = exchangeRates
                  .filter((exchange) => exchange.code === currency)[0];

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
                  <i className="fa-solid fa-pen-to-square" title="Editar despesa" />
                  <i className="fa-solid fa-trash" title="Excluir despesa" />
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

TableExpenses.propTypes = {
  expenses: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(TableExpenses);
