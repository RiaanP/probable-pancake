export const ADD_PERSON = 'ADD_PERSON';
export const ADD_PEOPLE = 'ADD_PEOPLE';

export function addPerson(person_name, person_person_email, person_number, person_start, person_end) {
    return {
        type: ADD_PERSON,
        person_name: person_name,
        person_person_email: person_person_email,
        person_number: person_number,
        person_start: person_start,
        person_end: person_end
    };
}

export function addPeople(people) {
    people.map(function (object, i) {
        return {
            type: ADD_PEOPLE,
            person_name: object.person_name,
            person_person_email: object.person_person_email,
            person_number: object.person_number,
            person_start: object.person_start,
            person_end: object.person_end
        };
    });
}