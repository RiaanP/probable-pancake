/* Creating of a redux store that holds the complete state tree of the app */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers';

export default createStore(
    rootReducer, applyMiddleware(thunk)
);