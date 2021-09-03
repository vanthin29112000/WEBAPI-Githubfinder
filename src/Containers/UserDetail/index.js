import React, { Component } from 'react';
import Loading from '../../Component/Loading';
// import Button from '../../Component/Button';
import Follow from '../../Layouts/Follow';
import Repositories from '../../Layouts/Repositories';
import UserInfo from '../../Layouts/UserInfo';
import UserAPI from '../../Services/Users/Users';
import "./UserDetail.css"

class UserDetail extends Component {
    state = {
        user: [],
        repos: [],
        isShowLoading : true,
    }

    async componentDidMount() {
        const login = this.props.match.params.login;
        const responseUserDetail = await UserAPI.fetchUserDetail(login);
        const responseRepo = await UserAPI.fetchRepo(login);

        this.setState({
            user: responseUserDetail.data,
            repos: responseRepo.data,
            isShowLoading : false
        })
    }

    onBackHome = ()=>{
        this.props.history.goBack();
    }

    render() {
        const { user, repos, isShowLoading } = this.state;
        const { hireable } = user;
        if(isShowLoading){
            return <Loading isLoading = {isShowLoading}></Loading>
        }
        return (
            <div className="userDetail">
                
                <div className="userDetail__rollback">
                    <button onClick = {this.onBackHome}><i className="fas fa-arrow-left"></i> Turn Back</button>
                    <p>Hireable : {!hireable ? <i class="fas fa-times-circle danger"></i> :
                        <i className="fas fa-check-circle check"></i>}</p>
                </div>
                <UserInfo user={user}></UserInfo>
                <Follow user={user}></Follow>
                <Repositories repos={repos}></Repositories>

            </div>
        );
    }
}

export default UserDetail;