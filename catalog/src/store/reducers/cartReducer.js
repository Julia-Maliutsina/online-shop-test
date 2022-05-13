const INITIAL_STATE = {
  productsInCart: [
    {
      id: 'ps-5',
      prices: [
        {
          amount: 844.02,
          currency: {
            label: 'USD',
            symbol: '$',
          },
        },
        {
          amount: 606.67,
          currency: {
            label: 'GBP',
            symbol: '£',
          },
        },
        {
          amount: 1088.79,
          currency: {
            label: 'AUD',
            symbol: 'A$',
          },
        },
        {
          amount: 91147.25,
          currency: {
            label: 'JPY',
            symbol: '¥',
          },
        },
        {
          amount: 63826.91,
          currency: {
            label: 'RUB',
            symbol: '₽',
          },
        },
      ],
      selectedAttributes: {
        Color: '#44FF03',
        Capacity: '512G',
      },
      quantity: 2,
    },
    {
      id: 'xbox-series-s',
      prices: [
        {
          amount: 333.99,
          currency: {
            label: 'USD',
            symbol: '$',
          },
        },
        {
          amount: 240.07,
          currency: {
            label: 'GBP',
            symbol: '£',
          },
        },
        {
          amount: 430.85,
          currency: {
            label: 'AUD',
            symbol: 'A$',
          },
        },
        {
          amount: 36068.27,
          currency: {
            label: 'JPY',
            symbol: '¥',
          },
        },
        {
          amount: 25257.22,
          currency: {
            label: 'RUB',
            symbol: '₽',
          },
        },
      ],
      selectedAttributes: {
        Color: '#030BFF',
        Capacity: '1T',
      },
      quantity: 1,
    },
  ],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'addProductToCart':
      let newProducts = state.productsInCart;
      let indexOfProductInCart = -1;
      for (let c = 0; c < newProducts.length; c++) {
        if (newProducts[c].id === action.payload.productToAdd.id) {
          indexOfProductInCart = c;
          break;
        }
      }
      if (indexOfProductInCart >= 0) {
        newProducts[indexOfProductInCart].quantity += 1;
      } else {
        newProducts.push(action.payload.productToAdd);
      }
      console.log(action.payload);
      return {
        productsInCart: newProducts,
      };
    case 'removeProductFromCart':
      let products = state.productsInCart;
      console.log(action.payload.productIdToRemove);
      for (let c = 0; c < products.length; c++) {
        if (products[c].id === action.payload.productIdToRemove) {
          const indexToDelete = c;
          products.splice(indexToDelete, 1);
          break;
        }
      }
      return {
        productsInCart: products,
      };
    default:
      return state;
  }
};
