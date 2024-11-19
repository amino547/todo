import { ADD_TODO, DELETE_ALL } from "../actions";

const initialState = [
    { id: 1, todo: 'amen', completed: false },
    { id: 2, todo: 'aymen', completed: false },
    { id: 3, todo: 'amir', completed: true },
];

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];

        case DELETE_ALL:
            return state.filter(e => e.id !== action.payload);

        default:
            return state;
    }
};
