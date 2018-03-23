import React from 'react';
import { Link } from "react-router-dom"



const PostCard = () => {
    return (
        <Link to="/post/:id">
            <div className="col s12">
                <div className="card">
                    <div className="card-content black-text">
                        <span className="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export { PostCard };
