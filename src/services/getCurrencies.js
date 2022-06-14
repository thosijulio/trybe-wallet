export default function() {
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((result) => result.json())
    .then((data) => {
      const currencies = [];
      Object.keys(data).forEach((currency) => {
        if (currency !== 'USDT') {
          currencies.push(data[currency]);
        }
      });
      return currencies;
    });
}
