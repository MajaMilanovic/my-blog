import React, { Component } from "react"
import { BackToPosts } from "../partials/BackToPosts";
import { Link } from "react-router-dom"
import { servicePost } from "../../services/ServicePost"
import { url } from "../../shared/constants"
import { getNumberOfItemsFromArray, generateRandomNumber } from "../../shared/utils"
import { Post } from "../../entities/Post"
import { Author } from "../../entities/Author"



class SinglePostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            authorId: "",
            name: "",
            posts: []
        }
    }

    componentDidMount() {
        // 1. fetch for post info
        fetch(url.postsURL + this.props.match.params.id)
            .then((response) => response.json())
            .then((post) => {
                const myPost = new Post(post)
                this.setState({
                    post: myPost
                })
                this.setState({
                    authorId: myPost.userId
                })

                // 2. fetch for author
                fetch(url.authorsURL + this.state.post.userId)
                    .then((res) => res.json())
                    .then((author) => {
                        const myAuthor = new Author(author)
                        this.setState({
                            name: myAuthor.name
                        })
                    })

                // 3. fetch for author's post
                fetch(url.authorPostURL + this.state.authorId)
                    .then((resp) => resp.json())
                    .then((postList) => {
                        const posts = getNumberOfItemsFromArray(postList, 3);
                        this.setState({
                            posts: posts
                        })
                        //returns array of strings
                    })
            })
    }


    render() {

        return (
            <div>
                <BackToPosts />
                <h1 className="center-align"> {this.state.post.title} </h1>
                <Link to={`/authors/${this.state.authorId}`}>{this.state.name}</Link>
                <p>{this.state.post.body}</p>
                <hr />
                <h3>3 more posts from same author</h3>
                <ul>
                    {this.state.posts.map((post) => {
                        return <li key={generateRandomNumber(10000)}>
                            <Link to={`/post/${post.id}`}>{post.title}
                            </Link></li>
                        ///  this doesn't change the ui, only url!!!
                    })
                    }
                </ul>
            </div>
        )
    }
}

export { SinglePostPage }