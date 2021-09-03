import React, { Component } from 'react';
import Alert from '../../Component/Alert';
import Loading from '../../Component/Loading';
import SearchUser from '../../Component/SearchUser';
// import axios from "axios";
import UserList from '../../Component/UserList';
import UserAPI from '../../Services/Users/Users';
import "./Search.css"


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            users :[],
            isLoading : false,
            isShowBtnClear : false,
            isShowAlert : false,
        }
    }
    
    onFetchSearchUser = async (search)=>{
        if(!search){
            this.setState({
                isShowAlert : true,
            })
            setTimeout(()=>{
                this.setState({
                isShowAlert : false,
            })},2000)
            return;
        }

        try{
            this.setState({
                isLoading : true,
                users : [],
                isShowBtnClear : false,
            })
            const response = await UserAPI.fetchSearchUser(search); //return promise
            this.setState({
                users : response.data.items,
                isLoading : false,
                isShowBtnClear : true,
            })
        }
        catch(err){
            console.log(err);
        };
    }

    onClearUser = ()=>{
        this.setState({
            users :[],
            isShowBtnClear : false
        })
    }

    componentDidMount(){
        if(this.props.search){
            this.onFetchSearchUser(this.props.search);
        }
        
    }

    render() {
        const {users,isLoading,isShowBtnClear,isShowAlert} = this.state;
        return (
            <div className = "home-page">
                {
                    isShowAlert && <Alert message = {" Please enter github username before search "}></Alert>
                }
                <SearchUser 
                    onFetchSearchUser = {this.onFetchSearchUser} 
                    isShowBtnClear={isShowBtnClear}
                    onClearUser = {this.onClearUser}
                    onSearchChangeState = {this.props.onSearchChangeState}
                ></SearchUser>
                <UserList users = {users} isLoading = {isLoading}></UserList>
            </div>
        );
    }
}

export default Search;