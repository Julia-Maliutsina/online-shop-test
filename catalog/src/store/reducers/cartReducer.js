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
      let quantityToDecrease = state.quantityInCart;
      products.splice(action.payload.productToRemove, 1);
      console.log('remove called');
      return {
        quantityInCart: quantityToDecrease - 1,
        productsInCart: products,
      };
    case 'changeProductQuantity':
      let productsWithQuantityChanges = state.productsInCart;
      productsWithQuantityChanges[action.payload.productToChange].quantity =
        action.payload.newProductQuantity;
      console.log('quantity changed');
      return {
        quantityInCart: action.payload.newQuantity,
        productsInCart: productsWithQuantityChanges,
      };
    case 'changeProductAttributes':
      let productsWithAttributeChanges = state.productsInCart;
      productsWithAttributeChanges[action.payload.productToChange].selectedAttributes =
        action.payload.newAttributes;
      console.log('attr changed');
      return {
        quantityInCart: state.quantityInCart,
        productsInCart: productsWithAttributeChanges,
      };
    default:
      return state;
  }
};
