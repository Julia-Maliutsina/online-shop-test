import store from '../store';

const addToCart = (productToAdd) => {
  const storeState = store.getState();
  let productsInCart = storeState.productsInCart;
  let quantityInCart = storeState.quantityInCart;
  let productQuantity;
  let indexOfProductInCart = -1;
  for (let p = 0; p < productsInCart.length; p++) {
    if (
      productsInCart[p].id === productToAdd.id &&
      JSON.stringify(productsInCart[p].selectedAttributes) ===
        JSON.stringify(productToAdd.selectedAttributes)
    ) {
      indexOfProductInCart = p;
      productQuantity = productsInCart[p].quantity;
      break;
    }
  }
  if (indexOfProductInCart >= 0) {
    store.dispatch({
      type: 'changeProductQuantity',
      payload: {
        newQuantity: quantityInCart + 1,
        newProductQuantity: productQuantity + 1,
        productToChange: indexOfProductInCart,
      },
    });
  } else {
    productToAdd.quantity = 1;
    productsInCart.push(productToAdd);
    store.dispatch({
      type: 'addProductToCart',
      payload: {
        newProducts: productsInCart,
      },
    });
  }
};

export default addToCart;
