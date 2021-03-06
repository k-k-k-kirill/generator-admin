import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

//Reducers
import optionsReducer from './slices/options';
import sampleDataReducer from './slices/sample/sample';
import uiReducer from './slices/ui/ui';

const rootReducer = combineReducers({
    options: optionsReducer,
    sample: sampleDataReducer,
    ui: uiReducer,
})

const sagaMiddleware = createSagaMiddleware()

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(rootSaga);

export default store;