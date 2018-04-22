import React from "react";

const GuestPost = (props) => {
    const { newPost } = props;

    return (
        <div className="col s12">
            <div className="card">
                <div className="card-content black-text">
                    <h1 className="card-title">{(newPost.title)}</h1>
                    <p>{(newPost.body)}</p>
                </div>
            </div>
        </div>
    )
}

export { GuestPost }