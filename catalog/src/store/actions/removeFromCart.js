import store from 'store';

const removeFromCart = (productIdToRemove, selectedAttributes) => {
  const storeState = store.getState();
  let productsInCart = storeState.productsInCart;
  let quantityInCart = storeState.quantityInCart;
  let productToRemove;
  for (let p = 0; p < productsInCart.length; p++) {
    if (
      productsInCart[p].id === productIdToRemove &&
      JSON.stringify(productsInCart[p].selectedAttributes) === JSON.stringify(selectedAttributes)
    ) {
      productToRemove = p;
      quantityInCart -= 1;
      store.dispatch({
        type: 'removeProductFromCart',
        payload: {
          productToRemove: productToRemove,
          quantityInCart: quantityInCart,
        },
      });
      break;
    }
  }
};

export default removeFromCart;
