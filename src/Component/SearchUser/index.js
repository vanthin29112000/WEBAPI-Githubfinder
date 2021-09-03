import React, { Component } from 'react';
import Button from '../Button';
import "./SearchUser.css"
class SearchUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            search : "",
        }
    }

    onSearchChange = (e)=>{
        
        const {value} = e.target;
        this.setState({
            search : value
        })
        this.props.onSearchChangeState(value);
    }

    onSubmitSearchUser = (e)=>{
        e.preventDefault();
        this.props.onFetchSearchUser(this.state.search);
        this.setState({
            search : "",
        })
    }

    render() {
        const {isShowBtnClear,onClearUser} = this.props;
        return (
            <form className = "search-user" onSubmit = {this.onSubmitSearchUser}>
                <input type = "text" name = "search" value = {this.state.search} onChange = {this.onSearchChange} placeholder = "Search User..."></input>
                {/* <button type = "submit">Search</button> */}
                <Button type = "submit" ></Button>
                {isShowBtnClear && <button type = "button" style = {{backgroundColor :"gray"}} onClick ={onClearUser}>Clear User</button>}
            </form>
        );
    }
}

export default SearchUser;