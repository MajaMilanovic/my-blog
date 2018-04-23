import React, { Component, Fragment } from "react"
import { postService } from "../services/PostService";
import "../app/partials/spinner.css";

class SinglePostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null,
            commentList: [],
            inputCommentTitle: "",
            inputCommentBody: "",
            inputCommentEmail: ""
        }
    }

    loadPostInfo = (id) => {
        postService.fetchPost(id)
            .then(post => {
                this.setState({
                    post
                })
            });
    }

    loadComments = (id) => {
        return postService.fetchPostComments(id)
            .then(commentList => {
                commentList.reverse();
                this.setState({
                    commentList
                })
            });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.loadPostInfo(id);
        this.loadComments(id);
    }

    getInputCommentTitle = (e) => {
        const value = e.target.value;
        this.setState({
            inputCommentTitle: value
        });
    }

    getInputCommentBody = (e) => {
        const value = e.target.value;
        this.setState({
            inputCommentBody: value
        });
    }
    getInputCommentEmail = (e) => {
        const value = e.target.value;
        this.setState({
            inputCommentEmail: value
        });
    }

    clearInputFields = () => {
        this.setState({
            inputCommentTitle: "",
            inputCommentBody: "",
            inputCommentEmail: ""
        })
    }

    sendComment = () => {
        const { id } = this.props.match.params;
        const commentID = Math.floor(Math.random() * 1e5);
        const name = this.state.inputCommentTitle;
        const body = this.state.inputCommentBody;
        const email = this.state.inputCommentEmail;

        if (id && commentID && name && email && name) {
            postService.sendComment(id, commentID, name, email, body)
                .then(result => {
                    this.loadComments(id);
                })
            this.clearInputFields();
        }
    }


    render() {
        const { post, commentList } = this.state;
        if (!post) { return <div className="spinner"></div> };

        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h4 className="post-title">{post.title}</h4>
                        <p className="lead post-body">{post.body}</p>
                    </div>
                </div>
                <div className="card">
                    {(commentList.length === 0)
                        ? "There are no comments yet."
                        : <h4 className="post-list-title">{commentList.length} Comments</h4>}

                    <div className="input-group mb-3 input-comment">
                        <div className="input-group-prepend  holder">
                            <input type="text" onChange={this.getInputCommentTitle} className="form-control" value={this.state.inputCommentTitle} placeholder="title..." aria-label="comment" aria-describedby="basic-addon2" />
                            <input type="text" onChange={this.getInputCommentBody} className="form-control" value={this.state.inputCommentBody} placeholder="content..." aria-label="comment" aria-describedby="basic-addon2" />
                            <input type="email" onChange={this.getInputCommentEmail} className="form-control" value={this.state.inputCommentEmail} placeholder="@email..." aria-label="comment" aria-describedby="basic-addon2" />

                            <div className="input-group-append  button-holder">
                                <button className={
                                    (!this.state.inputCommentTitle) || (!this.state.inputCommentBody) || (!this.state.inputCommentEmail)
                                        ? "btn btn-outline-secondary input-group-text disabled"
                                        : "btn btn-outline-secondary input-group-text"}
                                    onClick={this.sendComment} type="button">Post Comment</button>
                            </div>
                        </div>
                    </div>


                    <ul className="list-group list-group-flush">
                        {commentList.map((comment, index) => {
                            return <li className="list-group-item" key={comment.id}>
                                <h6 className="comment-title">{comment.name}</h6>
                                <p className="comment-email">{comment.email}</p>
                                {comment.body}</li>
                        })}
                    </ul>
                </div>
            </Fragment>
        )
    }
}

export { SinglePostPage };