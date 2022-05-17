import { findPriceInSelectedCurrency } from 'utils/findPrice';

export const countTax = (productsInCart, currency, tax) => {
  const pricesSum = productsInCart.reduce((sum, product) => {
    const price = findPriceInSelectedCurrency(currency, product.prices);
    return sum + price * product.quantity;
  }, 0);

  const taxSum = (pricesSum * tax) / 100;
  return taxSum.toFixed(2);
};
