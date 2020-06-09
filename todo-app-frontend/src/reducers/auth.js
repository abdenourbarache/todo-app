export default (state = {} , action) => {
    switch(action.type){
        case "LOGIN" : 
            return {user :action.user};
        case "LOGGED_FAILURE" :
            return {
                error : action.error
            };
        case "REGISTER_FAILURE" :
                return {
                    error : action.error
                };
        default : 
            return state;

    }

}
