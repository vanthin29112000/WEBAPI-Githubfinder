import React from 'react';
import "./UserList.css"
import UserItem from '../UserItem';
import Loading from '../Loading';

const UserList = (props) => {
    let { users, isLoading } = props;
    return (
        <>
            <Loading isLoading={isLoading}></Loading>
            <div className="userList">
                {
                    users.map((ele, index) =>
                        <UserItem user={ele} key={index}></UserItem>
                    )
                }

            </div>
        </>
    )
}

export default UserList;