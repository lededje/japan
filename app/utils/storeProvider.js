import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import asyncAwait from 'redux-async-await';
import reducers from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import defaultsDeep from 'lodash/defaultsDeep';

export default function configureStore(initialState, isServer) {
  if (!isServer && typeof window !== 'undefined' && window.store) {
    return window.store;
  }

  const mergedState = defaultsDeep({}, initialState, reducers());
  const composedMiddleware = composeWithDevTools(applyMiddleware(asyncAwait, thunk));
  const store = createStore(reducers, mergedState, composedMiddleware);

  if (typeof window !== 'undefined') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        // eslint-disable-next-line
        const nextReducer = require('../reducers');
        store.replaceReducer(nextReducer);
      });
    }
    window.store = store;
  }

  return store;
}
