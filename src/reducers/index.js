import { combineReducers } from 'redux';
import people from '../reducers/reducers';

export default combineReducers({
    people: people
});