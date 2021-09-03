import axios from "axios"

const baseURL = "https://api.github.com";

const UserAPI = {
    fetchUser : () =>{
        return axios.get(`${baseURL}/users`);
    },
    fetchSearchUser : (search) =>{
        return axios.get(`${baseURL}/search/users?q=${search}`);
    },
    fetchRepo : (login) =>{
        return axios.get(`${baseURL}/users/${login}/repos`);
    },
    fetchUserDetail : (login) =>{
        return axios.get(`${baseURL}/users/${login}`);
    }
}

export default UserAPI ;