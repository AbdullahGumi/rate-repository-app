import { createStore, combineReducers } from 'redux';
import repositoriesReducer from './reducers/repositoriesReducer';

const rootReducer = combineReducers({ 
    repositories: repositoriesReducer 
});

export const store = createStore(rootReducer);
