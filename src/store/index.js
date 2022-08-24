import { createStore, combineReducers } from 'redux';
import user from './user/reducer';
import links from './links/reducer';

const reducers = combineReducers({
  user,
  links,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
