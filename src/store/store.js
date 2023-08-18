import { compose,applyMiddleware ,createStore} from "redux";
import { persistStore,persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import logger from "redux-logger";
import {rootReducer} from './root-reducer'
import thunk from "redux-thunk";


  const middlewares=[process.env.NODE_ENV==='production'&&logger,thunk].filter(Boolean)


  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);


const composedEnhancer=compose(applyMiddleware(...middlewares))
export const store=createStore(persistedReducer,undefined,composedEnhancer)

export const persistor=persistStore(store)