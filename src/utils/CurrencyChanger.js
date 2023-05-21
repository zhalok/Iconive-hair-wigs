const currencyConverter = (currency, amount) => {
  // console.log("amount", amount);

  if (currency == "USD") return (amount / 106).toFixed(2);
  else return amount;
};

module.exports = currencyConverter;
