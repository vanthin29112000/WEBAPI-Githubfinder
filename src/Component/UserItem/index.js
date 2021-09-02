import React from 'react';
import { useHistory } from 'react-router-dom';
import "./UserItem.css"

const UserItem = (props)=> {
    const {login,avatar_url} = props.user;
    const history = useHistory();

    const onLinkToUserDetail = (login) =>{
        
        history.push(`/user/${login}`);
    }
    
        return (
            <div className = "user">
                <div className = "user__avatar">
                    <img src = {avatar_url}></img>
                </div>
                <div className = "user__name">
                    <p>{login}</p>
                </div>
                <button className="btn__moreInfo" onClick = {()=>onLinkToUserDetail(login)}>
                    More
                </button>
            </div>
        );
    }

export default UserItem;