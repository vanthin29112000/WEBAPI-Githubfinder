import axios from "axios"

const baseURL = "https://api.github.com";

const UserAPI = {
    fetchSearchUser : (search) =>{
        return axios.get(`${baseURL}/search/users?q=${search}`);
    },
    fetchUserDetail : (login) =>{
        return axios.get(`${baseURL}/users/${login}`);
    }
}

export default UserAPI ;