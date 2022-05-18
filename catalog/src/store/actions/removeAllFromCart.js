import store from '../store';

const removeAllFromCart = () => {
  store.dispatch({
    type: 'clearCart',
  });
};

export default removeAllFromCart;
