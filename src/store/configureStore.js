import createStore from 'redux/es/createStore'
import applyMiddleware from 'redux/es/applyMiddleware';

import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
