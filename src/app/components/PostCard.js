import React from 'react';
import { Link } from "react-router-dom"
import { capitalizeFirstLetter } from "../../shared/utils"


const PostCard = (props) => {
    const { postData, newPost } = props

    return (
        <Link to={`/post/${postData.id}`}>
            <div className="col s12">
                <div className="card">
                    <div className="card-content black-text">
                        <h1 className="card-title">{capitalizeFirstLetter(postData.title)}</h1>
                        <p>{capitalizeFirstLetter(postData.body)}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export { PostCard };
