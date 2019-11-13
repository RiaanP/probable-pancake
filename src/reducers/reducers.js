import { ADD_PERSON, FETCH_PEOPLE } from '../actions/actions';
const initialState = {
    people: {}
};

/* Here the creation and fetching of person happens after fetching of data or creating of person */
function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PERSON:
            return {
                people: [
                    ...state.people,
                    {
                        person_name: action.person_name,
                        person_email: action.person_email,
                        person_number: action.person_number,
                        person_start: action.person_start,
                        person_end: action.person_end
                    }
                ]
            };
        case FETCH_PEOPLE:
            return Object.assign({}, state.person, {
                people: action.people
            });
        default:
            return state;
    }
}

export default rootReducer;