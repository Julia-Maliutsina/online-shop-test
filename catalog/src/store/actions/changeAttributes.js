import store from 'store';

const changeAttributes = (productToChange, oldSelectedAttributes, newAttributes) => {
  const storeState = store.getState();
  let productsInCart = storeState.productsInCart;

  let oldProduct;
  for (let p = 0; p < productsInCart.length; p++) {
    if (
      productsInCart[p].id === productToChange &&
      JSON.stringify(productsInCart[p].selectedAttributes) === JSON.stringify(oldSelectedAttributes)
    ) {
      oldProduct = p;
    }
  }
  store.dispatch({
    type: 'changeProductAttributes',
    payload: {
      productToChange: oldProduct,
      newAttributes: newAttributes,
    },
  });
};

/*
const changeAttributes = (productToChange, oldSelectedAttributes, newAttributes) => {
  const storeState = store.getState();
  let productsInCart = storeState.productsInCart;
  let quantityInCart = storeState.quantityInCart;
  let productWithSameAttributes = -1;
  let oldProduct;
  let newProductQuantity;
  for (let p = 0; p < productsInCart.length; p++) {
    if (
      productsInCart[p].id === productToChange &&
      JSON.stringify(productsInCart[p].selectedAttributes) === JSON.stringify(newAttributes)
    ) {
      productWithSameAttributes = p;
      newProductQuantity = productsInCart[p].quantity + 1;
      continue;
    }
    if (
      productsInCart[p].id === productToChange &&
      JSON.stringify(productsInCart[p].selectedAttributes) === JSON.stringify(oldSelectedAttributes)
    ) {
      oldProduct = p;
    }
  }
  if (productWithSameAttributes >= 0) {
    store.dispatch({
      type: 'changeProductQuantity',
      payload: {
        productToChange: productWithSameAttributes,
        newProductQuantity: newProductQuantity,
        newQuantity: quantityInCart,
      },
    });
    store.dispatch({
      type: 'removeProductFromCart',
      payload: {
        productIdToRemove: oldProduct,
        quantityInCart: quantityInCart,
      },
    });
  } else {
    store.dispatch({
      type: 'changeProductAttributes',
      payload: {
        productToChange: oldProduct,
        newAttributes: newAttributes,
      },
    });
  }
};
*/

export default changeAttributes;
