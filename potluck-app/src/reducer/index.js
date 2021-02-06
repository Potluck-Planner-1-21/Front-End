
export const initialState = {
    users : [{
        name: "",
        email: ""
    }]
    ,
    
    isFetching: false

}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCHING_USERS_START":
            return {
                ...state,
                  isFetching: true,
            }
     
     
       case "FETCHING_USERS_SUCCESS":
           return {
               ...state,
               isFetching: false,
               users: action.payload
           }

           default:
               return state;

        }    

}