export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo=(payload)=>{
    return{
        type: ADD_TODO,
        payload
    }
}

export const deleteAll = (payload) =>{
    return{
        type: DELETE_ALL,
        payload
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id
    };
};

export const updateTodo = (updatedTodo) => {
    return {
        type: UPDATE_TODO,
        payload: updatedTodo
    };
};