const INITIAL_STATE = {
  quantityInCart: 0,
  productsInCart: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'addProductToCart':
      let quantityToIncrease = state.quantityInCart;
      console.log('added to cart');
      return {
        productsInCart: action.payload.newProducts,
        quantityInCart: quantityToIncrease + 1,
      };
    case 'removeProductFromCart':
      let products = state.productsInCart;
      products.splice(action.payload.productToRemove, 1);
      console.log('remove called');
      return {
        quantityInCart: action.payload.quantityInCart,
        productsInCart: products,
      };
    case 'changeProductQuantity':
      let productsWithQuantityChanges = state.productsInCart;
      productsWithQuantityChanges[action.payload.productToChange].quantity =
        action.payload.newProductQuantity;
      console.log(productsWithQuantityChanges[action.payload.productToChange]);
      console.log('quantity changed');
      return {
        quantityInCart: action.payload.newQuantity,
        productsInCart: productsWithQuantityChanges,
      };
    default:
      return state;
  }
};
