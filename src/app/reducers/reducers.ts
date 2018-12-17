import { Person } from "../models/person";
import { Actions, CREATE_PERSON, DELETE_PERSON } from "../actions/actions";

const initialState: Person = {
    id: "1",
    name: "Andrien"
};
export function reducer(
    state: Person[] = [initialState],
    action: Actions) {
 
    switch (action.type) {
        case CREATE_PERSON:
            return [...state, action.payload];
 
        case DELETE_PERSON:
            return state.filter(({ id }) => id !== action.id);
 
        default:
            return state;
    }
}