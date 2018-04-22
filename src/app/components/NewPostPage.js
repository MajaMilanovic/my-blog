import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../../entities/Post"


const NewPostPage = (props) => {
    const { createNewPost } = props

    const saveNewPost = (e) => {
        //1. get values from form
        const postData = {
            title: document.querySelector("#input-title").value,
            body: document.querySelector("#textarea-content").value,
            userId:"",
            id:""
        }

        //2. make new post object
        const post = new Post (postData);

        //3. pass post object to Main
        createNewPost(post)

        //4. reset form
        postData.title=""
        postData.body=""

    }

    return (
        <div className="container">
            <form>
                <div>
                    <h1>NEW POST</h1>
                    <div className="input-field">
                        <h2>Title</h2>
                        <input id="input-title" type="text" />
                    </div>
                    <div>
                        <div className="input-field">
                            <h2>Content</h2>
                            <textarea id="textarea-content" className="materialize-textarea"></textarea>
                        </div>
                    </div>
                </div>
                <div id="button-links">
                    <Link to="/" className="btn #3949ab indigo lighten-1">Cancel</Link>
                    <Link to="/" className="btn #3949ab indigo lighten-1" id="button-save" onClick={saveNewPost}>Save</Link>
                </div>
            </form>
        </div>
    )
}


export { NewPostPage }