import React, { Component } from 'react';
import UserAPI from '../../Services/Users/Users';

class UserDetail extends Component {
    state ={
        user : []
    }

    async componentDidMount(){
        const login = this.props.match.params.login;
        const reponse = await UserAPI.fetchUserDetail(login);
        this.setState({
            user : reponse.data
        })
        // const reponse = await UserAPI.fetchSearchUser(this.props.math.pargram)
    }

    render() {
        return (
            <div>
                UserDetail
            </div>
        );
    }
}

export default UserDetail;