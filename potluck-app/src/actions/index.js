import { axiosWithAuth } from '../utils/axiosWithAuth';


export const fetchUsers = () => (dispatch) => {
    dispatch ({ type : 'FETCHING_USERS_START',
                isFetching: true
})

    axiosWithAuth().get("/users")
    .then(res => {
        dispatch({ type: "FETCHING_USERS_SUCCESS",
                   payload: res.data,
                   isFetching: false
                })
    })
    .catch (err => 
        console.log(err))
}