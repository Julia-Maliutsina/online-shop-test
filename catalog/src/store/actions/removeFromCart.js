import store from 'store';

const removeFromCart = (productIdToRemove, selectedAttributes) => {
  const storeState = store.getState();
  let productsInCart = storeState.productsInCart;
  let productToRemove;
  for (let p = 0; p < productsInCart.length; p++) {
    if (
      productsInCart[p].id === productIdToRemove &&
      JSON.stringify(productsInCart[p].selectedAttributes) === JSON.stringify(selectedAttributes)
    ) {
      productToRemove = p;
      store.dispatch({
        type: 'removeProductFromCart',
        payload: {
          productToRemove: productToRemove,
        },
      });
      break;
    }
  }
};

export default removeFromCart;
