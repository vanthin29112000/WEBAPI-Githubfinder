import React, { Component } from 'react';
import "./UserInfo.css"
class UserInfo extends Component {
    render() {
        const {location,login,avatar_url,bio,name,company,blog,email,twitter_username,html_url} = this.props.user;

        return (
            <div className ="user-info">
                <div className ="user-info__left">
                    <img src={avatar_url}></img>
                    {name &&<h2>{name}</h2>}
                    <span>
                        {location && <><strong>Location :</strong> {location} </>}
                    </span>
                </div>

                <div className ="user-info__right">
                    {bio && <><strong>Bio</strong> <br/>{bio}<br/></>} 
                    {login && <><strong>Username:</strong> {login} <br/></>} 
                    {company && <><strong>Company:</strong> {company} <br/></>} 
                    {email && <><strong>Email:</strong> {email} <br/></>} 
                    {blog && <><strong>Blog:</strong> <a href= {blog} className ="blog">{blog}</a> </>} <br/>
                    <div className = "btnVisitGit">
                        <a href ={html_url} >Visit Github Profile</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;