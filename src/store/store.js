import {compose,createStore, applyMiddleware} from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";

//root reducer

const persistConfig = {
    key: 'root',
    storage: storage,
    blaclist: ['user']
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)
//Enhancer for Redux Toolkit
const composeEnhancerRedux = (process.env.NODE_ENV !== 'production' && window && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const composedEnhancers = composeEnhancerRedux(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer,undefined,composedEnhancers);

export const persistor = persistStore(store);