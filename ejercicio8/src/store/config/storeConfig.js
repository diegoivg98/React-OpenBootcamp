import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "../reducers/rootReducer";
import { configureStore} from '@reduxjs/toolkit';
import { watcherSaga } from "../sagas/sagas";
import createSagaMiddleware from "@redux-saga/core";

export const createAppStore = () => {
  let store = configureStore(
    {
      reducer: rootReducer,
    },
    composeWithDevTools()
  );

  return store;
};

export const createAppAsyncStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  let store = configureStore(
    {
      reducer: rootReducer,
      middleware: [sagaMiddleware],
      devTools: composeWithDevTools(),
    }
  );

  // We init the Watcher Saga
  sagaMiddleware.run(watcherSaga);

  return store;
};