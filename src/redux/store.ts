import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import optionsReducer from './slices/options';
import sampleDataReducer from './slices/sample/sample';

const rootReducer = combineReducers({
    options: optionsReducer,
    sample: sampleDataReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools());

export default store;