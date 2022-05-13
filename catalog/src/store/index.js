import { legacy_createStore as createStore } from 'redux';

import { cartReducer } from './reducers/cartReducer';

let store = createStore(cartReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
