const currencyConverter = (from, to, amount) => {
  if (from == to) return from;
  if (to == "BDT") return amount * 106;
  if (to == "USD") return amount / 106;
};

module.exports = currencyConverter;
