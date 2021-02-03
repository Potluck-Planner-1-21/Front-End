
export const initialState = {
    eventDetails: [],
    isPosting: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "POSTING_EVENT_START":
            return {
                ...state,
                  isPosting: true
            }
     
     
       case "POSTING_EVENT_SUCCESS":
           return {
               ...state,
               isPosting: false,
               eventDetails: action.payload
        
           }

           default:
               return state;

        }    

}

export default reducer;