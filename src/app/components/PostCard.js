import React from 'react';
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
    const postID = `/post/${post.id}`

    return (
        <Link to={postID}>
            <div className="col s12">
                <div className="card homepage-card">
                    <div className="card-content black-text">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export { PostCard };
