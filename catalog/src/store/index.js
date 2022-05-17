import { legacy_createStore as createStore } from 'redux';

import { cartReducer } from './reducers/cartReducer';

let store = createStore(cartReducer);

export default store;
