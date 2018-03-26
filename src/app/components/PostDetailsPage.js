import React from "react"
import { BackToPosts } from "../partials/BackToPosts";
import { Link } from "react-router-dom";
import { servicePost } from "../../services/ServicePost";
import { serviceAuthors } from "../../services/ServiceAuthors";
import { RelatedPost } from "./RelatedPost";
// https://reactjs.org/docs/react-component.html#componentwillreceiveprops

class AuthorName extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            author: null
        }
    }

    getAuthorName() {
        return serviceAuthors.fetchAuthor(this.props.authorId)
            .then(author => { this.setState({ author }) });
    }

    componentDidMount() {
        this.getAuthorName()
    }

    render() {

        if (!this.state.author) {
            return <p>...</p>
        }

        return (
            <Link to={`/authors/${this.state.author.authorId}`}>
                {this.state.author.name}
            </Link>
        )
    }
}

class AuthorPosts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: null
        }
    }

    componentDidMount() {
        serviceAuthors.fetchAuthorPosts(this.props.authorId)
            .then((posts) => {
                this.setState({ posts })
            })
    }

    render() {

        if (!this.state.posts) {
            return <p>...</p>
        }

        return (
            <ul>
                {this.state.posts.map((post, index) => <RelatedPost key={index} post={post} />)}
            </ul>
        )
    }
}

class PostDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    loadPosts(props) {
        servicePost
            .fetchPost(props.match.params.id)
            .then((post) => {
                this.setState({ post })
            })
    }

    componentDidMount() {
        this.loadPosts(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.loadPosts(nextProps)
    }

    render() {

        if (!this.state.post) {
            return <h3>Loading...</h3>
        }

        return (
            <div>
                <BackToPosts />
                <h1 className="center-align">{this.state.post.title}</h1>
                <AuthorName authorId={this.state.post.userId} />
                <p>{this.state.post.body}</p>
                <hr />
                <h3>3 more posts from same author</h3>
                <AuthorPosts authorId={this.state.post.userId} />
            </div>
        )
    }
}

export { PostDetailsPage }