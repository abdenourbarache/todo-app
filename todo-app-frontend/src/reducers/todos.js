export default (state = {} , action) => {
    switch(action.type){
        case "GET_TODOS" : 
            return action.todos;
        case "ADD_TODO" :
            return [...state, action.todo];
        case "EDIT_TODO" : 
            return state.map((todo) => { 
                if(todo._id === action.todo._id) return {...todo, ...action.todo}
                return todo
            });
        case "REMOVE_TODO" : 
            return state.filter( todo => todo._id !== action.id);
        default : 
            return state;
    }

}