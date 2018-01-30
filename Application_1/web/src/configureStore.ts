import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { RootState } from './store';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import * as auth from './authentification';
import * as nutritionPlan from './nutritionPlan';
export const history = createHistory();

const makeReducer = () => combineReducers<RootState>({
    auth: auth.reducer,
    nutritionPlan: nutritionPlan.reducer,
    router: routerReducer
});

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        auth.rootSaga()
    ]);
}

const makeMiddlewares = () => {
    const middlewares = [sagaMiddleware, routerMiddleware(history)];
    if (process.env.NODE_ENV === 'development') {
        const { createLogger } = require('redux-logger');
        const logger = createLogger({ collapsed: true });
        middlewares.push(logger);
    }
    
    return middlewares;
};

export default () => {
    const reducer = makeReducer();
    const middlewares = makeMiddlewares();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore<RootState>(reducer, composeEnhancers(
        applyMiddleware(...middlewares)
    ));
    sagaMiddleware.run(rootSaga);
    return store;
};
