import axios from 'axios';

const API_URL = "http://localhost:3000/todos/";

export const getTodos = (todos) =>({
    type :'GET_TODOS',
    todos
})

export const startGetTodos = (token, callback) =>{
    return (dispatch) => {
        axios.get(API_URL,
            {
                headers: {
                    'x-auth': token
                }
            }).then(res =>{
                    dispatch(getTodos(res.data.todos));
                    callback();
                } 
            )
    }
    
}

export const addTodo = (todo) => ({
    type :'ADD_TODO',
    todo
})

export const startAddTodo = (token, todo, callback) => {
    const {text} = todo;
    return(dispatch) => {
        axios.post(API_URL,{
            text
        },{
            headers : {
                'x-auth' : token
            }
        }).then((res) => {
            dispatch(addTodo(res.data));
            callback();
        }).catch((err) =>{console.log(err)})
    }
}

export const editTodo = (todo) => ({
    type :'EDIT_TODO',
    todo
})

export const startEditTodo = (token, id, todo, callback) => {
    return (dispatch) => { 
        axios.put(API_URL + id,todo,{
            headers : {
                'x-auth' : token
            }
        }).then((res) => {
            dispatch(editTodo(res.data));
            callback();
        }).catch((err) =>{console.log(err)})
    }
}

export const removeTodo = (id) => ({
    type :'REMOVE_TODO',    
    id
})

export const startRemoveTodo = (token, id) => {
    return (dispatch) => { 
        axios.delete(API_URL + id,{
            headers : {
                'x-auth' : token
            }
        }).then((res) => {
            dispatch(removeTodo(id));
        }).catch((err) =>{console.log(err)})
    }
}