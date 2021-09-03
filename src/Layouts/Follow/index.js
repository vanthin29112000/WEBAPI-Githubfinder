import React from 'react';
import "./Follow.css"

const Follow = (props) => {
    const {
        public_repos,
        public_gists,
        followers,
        following,
    } = props.user
    return (
        <div className="follow">
            <p className="follower">
                Followers: {followers}
            </p>
            <p className="following">
                Following: {following}
            </p>
            <p className="repos-amount">
                Public repos: {public_repos}
            </p>
            <p className="gits-amount">
                Public gits: {public_gists}
            </p>
        </div>
    )
}

export default Follow;