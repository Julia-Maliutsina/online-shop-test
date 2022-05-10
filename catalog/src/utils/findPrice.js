export const findPriceInSelectedCurrency = (currency, prices) => {
  let priceInSelectedCurrency = 0;
  for (let p = 0; p < prices.length; p++) {
    if (prices[p].currency.label === currency) {
      priceInSelectedCurrency = prices[p].amount;
    }
  }
  return priceInSelectedCurrency;
};
