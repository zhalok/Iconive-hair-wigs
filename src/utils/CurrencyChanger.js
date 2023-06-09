const currencyConverter = (currency, amount) => {
  // console.log("amount", amount);

  if (currency == "USD")
    return (amount / parseFloat(process.env.REACT_APP_FX_RATE)).toFixed(2);
  else return amount;
};

module.exports = currencyConverter;
