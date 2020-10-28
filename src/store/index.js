import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import commentSaga from "../comment/store/saga";

export const createReduxStore = () => {
  const initialState = {};
  const middlewares = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  enhancers.push(applyMiddleware(...middlewares));
  const enhancer = compose(...enhancers);

  const store = createStore(reducers, initialState, enhancer);
  sagaMiddleware.run(commentSaga);
  return store;
};
