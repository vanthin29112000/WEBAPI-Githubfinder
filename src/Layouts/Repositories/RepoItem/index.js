import React from 'react'

const RepoItem = (props) => {
    const { name, html_url, description, forks_url } = props.repo;
    return (
        <div className="repoItem">
            <a href={html_url} className="repoItem__title"> {name}</a>
            <p className="forked">Forked from <a href={forks_url}>{forks_url}</a></p>
            <p className="description">{description}</p>
        </div>

    )
}
export default RepoItem;