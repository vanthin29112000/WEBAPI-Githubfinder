import React, { Component } from 'react';
import SearchUser from '../../Component/SearchUser';
import axios from "axios";
import UserList from '../../Component/UserList';
import UserAPI from '../../Services/Users/Users';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            users :[],
        }
    }
    // cach 1:
    // fetchUser =(search)=>{
    //     axios.get(`https://api.github.com/search/users?q=${search}`)
    //     .then((response)=>{
    //         this.setState({
    //             users : response.data.items
    //         })
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // }


    // cach 2:
    onFetchSearchUser = async (search)=>{
        try{
            const response = await UserAPI.fetchSearchUser(search); //return promise
            this.setState({
                users : response.data.items
            })
        }
        catch(err){
            console.log(err);
        };
    }
    render() {
        return (
            <div className = "home-page">
                <SearchUser onFetchSearchUser = {this.onFetchSearchUser}></SearchUser>
                <UserList users = {this.state.users}></UserList>
            </div>
        );
    }
}

export default Home;