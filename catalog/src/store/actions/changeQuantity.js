import store from 'store';

const changeQuantity = (productToChange, selectedAttributes, newProductQuantity) => {
  const storeState = store.getState();
  let productsInCart = storeState.productsInCart;
  let changedQuantity = storeState.quantityInCart;
  for (let p = 0; p < productsInCart.length; p++) {
    if (
      productsInCart[p].id === productToChange &&
      JSON.stringify(productsInCart[p].selectedAttributes) === JSON.stringify(selectedAttributes)
    ) {
      const indexToChange = p;
      changedQuantity =
        productsInCart[indexToChange].quantity > newProductQuantity
          ? changedQuantity - 1
          : changedQuantity + 1;
      store.dispatch({
        type: 'changeProductQuantity',
        payload: {
          newQuantity: changedQuantity,
          newProductQuantity: newProductQuantity,
          productToChange: indexToChange,
        },
      });
      break;
    }
  }
};

export default changeQuantity;
