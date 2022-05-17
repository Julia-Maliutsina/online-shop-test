import { findPriceInSelectedCurrency } from 'utils/findPrice';

export const countFinalPrice = (productsInCart, currency, tax) => {
  const sum = productsInCart.reduce((sum, product) => {
    const price = findPriceInSelectedCurrency(currency, product.prices);
    return sum + price * product.quantity;
  }, 0);
  const finalPrice = sum + (sum * tax) / 100;
  return finalPrice.toFixed(2);
};
