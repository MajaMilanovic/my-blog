import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { postService } from "../services/PostService";
import { withRouter } from "react-router";
import "./newPost.css";

class NewPostPage extends Component {
    constructor() {
        super();
        this.state = {
            inputTitle: "",
            inputContent: "",
            inputUserID: ""
        }
    }

    getInput = (e) => {
        const value = e.target.value;
        const stateName = e.target.id;
        if (stateName === "inputTitle") {
            this.setState({
                inputTitle: value
            })
        } else if (stateName === "inputContent") {
            this.setState({
                inputContent: value
            })
        } else if (stateName === "inputUserID") {
            this.setState({
                inputUserID: value
            })
        }
    }

    resetCreateNewPostForm = () => {
        this.setState({ inputTitle: "", inputContent: "", inputUserID: "" });
    }

    navigateToHomePage = () => {
        this.props.history.push("/");
    }

    sendPost = () => {
        const title = this.state.inputTitle;
        const body = this.state.inputContent;
        const userId = this.state.inputUserID;
        if (title && body && userId) {
            postService.sendPost(title, body, userId)
                .then(result => {
                    this.navigateToHomePage();
                })
        }
        this.resetCreateNewPostForm();
    }


    render() {
        return (
            <Fragment>
                <div className="holder">
                    <h4 className="new-post-title">Create New Post</h4>
                    <div className="input-group mb-3 input-new-post-title">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                        </div>
                        <input type="text" className="form-control" id="inputTitle" onChange={this.getInput} value={this.state.inputTitle} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Content</span>
                        </div>
                        <textarea className="form-control" id="inputContent" onChange={this.getInput} value={this.state.inputContent} aria-label="Your opinion here..."></textarea>
                    </div>

                    <div className="input-group mb-3 input-user-ID">
                        <input type="text" onChange={this.getInput} value={this.state.inputUserID} id="inputUserID" className="form-control" placeholder="Type your ID" aria-label="User ID" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <span className="input-group-text" id="basic-addon2">only numbers</span>
                        </div>
                    </div>

                    <button onClick={this.sendPost} type="button"
                        className={((!this.state.inputContent) || (!this.state.inputTitle) || (!this.state.inputUserID))
                            ? "btn btn-secondary disabled"
                            : "btn btn-secondary"} id="button-new-post-send">Send</button>
                    <button onClick={this.navigateToHomePage} type="button" className="btn btn-warning" id="button-new-post-cancel">Cancel</button>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(NewPostPage);