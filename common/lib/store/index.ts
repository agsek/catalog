import {Catalog} from '../';
import {catalogReducer} from './catalog/reducers';
import {WindowEx} from '../../types';
import {
    applyMiddleware, combineReducers, compose, createStore, Store
} from 'redux';
import dynamicMiddlewares from 'redux-dynamic-middlewares';
import thunk from 'redux-thunk';


declare var window: WindowEx;

export interface RootState {
    catalog: Catalog;
}

export const reducer = combineReducers({
    catalog: catalogReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store<RootState> = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, dynamicMiddlewares))
);

export {ReduxState} from './reducers';
