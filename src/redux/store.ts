import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import optionsReducer from './slices/options';

const rootReducer = combineReducers({
    options: optionsReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;