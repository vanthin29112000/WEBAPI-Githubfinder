import React from 'react'
import RepoItem from './RepoItem';
import "./Repositories.css"
const Repositories = (props) => {
    const { repos } = props;
    return (
        <div className="repos">
            <p className="repos__title">Repositories</p>
            <div className="repos__listItem">
                {
                    repos.map((ele, index) =>
                        <RepoItem repo={ele} key={index}></RepoItem>
                    )
                }
            </div>
        </div>
    )
}
export default Repositories;