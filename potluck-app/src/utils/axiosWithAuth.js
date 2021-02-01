import axios from 'axios';

export const axiosWithAuth = ()=> {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://potluck-planner-1-21.herokuapp.com/users",
        headers: { Authorization: token }
    })
}