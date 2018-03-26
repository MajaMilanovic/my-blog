import React from 'react';
import { Link } from "react-router-dom"

const AuthorCard = ({ author }) => {
    const authorID = `/author/${author.id}`

    return (
        <Link to={authorID} className="collection-item">{author.name}</Link>
    )
}

export { AuthorCard };