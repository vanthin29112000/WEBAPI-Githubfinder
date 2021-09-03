import React, { Component } from 'react';
import Loading from '../../Component/Loading';
import UserList from '../../Component/UserList';
import UserAPI from '../../Services/Users/Users';

class Home extends Component {
    constructor (props){
        super(props);

        this.state = {
            users : [],
            isLoaidng : false,
        }
    }
    componentDidMount(){
        this.onFetchUser(); //load User form BE
    }
    
    onFetchUser = async ()=>{
        this.setState({
            isLoading : true,
            users : [],
        })
        try{
            const reponse = await UserAPI.fetchUser();

            this.setState({
                users : reponse.data,
                isLoading : false,
            })
        }
        catch(err){
            console.log(err);
        }
    }

    render() {
        return (
            <>
                <Loading isLoading = {this.state.isLoading}></Loading>
                <div>
                    {
                        <UserList users = {this.state.users}></UserList>
                    }
                </div>
            </>
        );
    }
}

export default Home;