import React from 'react';
import "./UserList.css"
import UserItem from '../UserItem';

const UserList = (props) => {
    let {users} = props;
    return (
        <div className = "userList">
            {
                users.map((ele,index) =>
                    <UserItem user={ele} key = {index}></UserItem>
                )
            }
        </div>
    )
}

export default UserList;