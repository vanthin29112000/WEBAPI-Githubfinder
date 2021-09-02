import React, { Component } from 'react';
import "./SearchUser.css"
class SearchUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            search : ""
        }
    }

    onSearchChange = (e)=>{
        
        const {value} = e.target;
        this.setState({
            search : value
        })
    }

    onSubmitSearchUser = (e)=>{
        e.preventDefault();
        this.props.onFetchSearchUser(this.state.search);
    }

    render() {
        return (
            <form className = "search-user" onSubmit = {this.onSubmitSearchUser}>
                <input type = "text" name = "search" value = {this.state.search} onChange = {this.onSearchChange} placeholder = "Search User..."></input>
                <button type = "submit">Search</button>
            </form>
        );
    }
}

export default SearchUser;