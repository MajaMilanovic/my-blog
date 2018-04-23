import React from "react";
import { Link } from "react-router-dom";
import { postService } from "../services/PostService";
import { withRouter } from "react-router";

const PostCard = (props) => {
    const { post, history, loadPostsOnFeedPage } = props;
    const deletePost = () => {
        postService.removePost(post.id)
            .then(result => {
                loadPostsOnFeedPage();
                history.push("/");
            })
    }

    return (
        <div className="card post-card">
            <div className="card-body">
                <Link to={`/post/${post.id}`} className="card-title">{post.title}</Link>
                <span className="span-remove-post" onClick={deletePost}><i className="material-icons">remove_circle_outline</i></span>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    )
}


export default withRouter(PostCard);