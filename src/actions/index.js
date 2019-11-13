import { FETCH_PEOPLE } from '../actions/actions';
import axios from 'axios';

const apiUrl = 'http://api.shaun.software/person';


export const fetchPeople = (people) => {
    return {
        type: FETCH_PEOPLE,
        people
    }
};

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