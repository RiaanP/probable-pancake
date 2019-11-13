import axios from 'axios';
import { combineReducers } from 'redux';
import rootReducer from '../reducers/reducers';

export const ADD_PERSON = 'ADD_PERSON';
export const FETCH_PEOPLE = 'FETCH_PEOPLE';

const apiUrl = 'http://api.shaun.software/person';

export default combineReducers({
    people: rootReducer
});

/* When the async call(fetchAllPeople) is complete this is called with action type and the payload*/
export const fetchPeople = (people) => {
    return {
        type: FETCH_PEOPLE,
        people
    }
};

/* Used for inserting a new Person into the state via Redux*/
export const addPerson = (person_name, person_email, person_number, person_start, person_end) => {
    return {
        type: ADD_PERSON,
        person_name: person_name,
        person_email: person_email,
        person_number: person_number,
        person_start: person_start,
        person_end: person_end
    };
};

/* This is used to get all data(people) from the api asynchronously*/
export const fetchAllPeople = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchPeople(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};
