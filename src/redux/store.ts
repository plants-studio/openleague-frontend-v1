import { createStore, applyMiddleware, Middleware, StoreEnhancer } from 'redux';
import rootReducer from './reducer';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const bindMiddleware = (middleware?: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
    // composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore: MakeStore<{}> = () => {
  console.log('make store');
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const store = createStore(rootReducer, {}, bindMiddleware([...middlewares]));
  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper<{}>(makeStore, { debug: true });
