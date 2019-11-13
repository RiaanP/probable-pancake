import { ADD_PERSON, ADD_PEOPLE } from '../actions/actions';
const initialState = {
    people: []
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_PERSON:
            return {
                people: [
                    ...state.people,
                    {
                        person_name: action.person_name,
                        person_person_email: action.person_person_email,
                        person_number: action.person_number,
                        person_start: action.person_start,
                        person_end: action.person_end
                    }
                ]
            };
        case ADD_PEOPLE:
            return {
                people: [
                    ...state.people,
                    {
                        person_name: action.person_name,
                        person_person_email: action.person_person_email,
                        person_number: action.person_number,
                        person_start: action.person_start,
                        person_end: action.person_end
                    }
                ]
            };

        default:
            return state;
    };

}

export default rootReducer;