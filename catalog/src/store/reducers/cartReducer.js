const INITIAL_STATE = {
  quantityInCart: 0,
  productsInCart: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'addProductToCart':
      let quantityToIncrease = state.quantityInCart;
      return {
        productsInCart: action.payload.newProducts,
        quantityInCart: quantityToIncrease + 1,
      };
    case 'removeProductFromCart':
      let products = state.productsInCart;
      products.splice(action.payload.productToRemove, 1);
      return {
        quantityInCart: action.payload.quantityInCart,
        productsInCart: products,
      };
    case 'changeProductQuantity':
      let productsWithQuantityChanges = state.productsInCart;
      productsWithQuantityChanges[action.payload.productToChange].quantity =
        action.payload.newProductQuantity;
      return {
        quantityInCart: action.payload.newQuantity,
        productsInCart: productsWithQuantityChanges,
      };
    case 'clearCart':
      return {
        quantityInCart: 0,
        productsInCart: [],
      };
    default:
      return state;
  }
};
