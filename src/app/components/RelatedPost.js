import React from 'react';
import { Link } from 'react-router-dom';

const RelatedPost = ({ post }) => {
    return (
        <li>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
    )
}

export { RelatedPost };