export default (state = false , action) => {
    switch(action.type){
        case "FETCHING_DATA" : 
            return true;
        case "DATA_FETCHED" :
            return false;
        default : 
            return state;

    }

}
