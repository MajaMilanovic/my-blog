import React from "react"
import { BackToPosts } from "../partials/BackToPosts";
import { Link } from "react-router-dom";
import { servicePost } from "../../services/ServicePost";
import { serviceAuthors } from "../../services/ServiceAuthors";
import { RelatedPost } from "./RelatedPost";

class SinglePostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singlePostId: props.match.params.id,
            post: null,
            author: null,
            authorPosts: []
        }
    }

    getNewAuthor(id) {
        serviceAuthors.fetchAuthor(id)
            .then(author => {
                this.setState({ author })
            });
    }

    getNewAuthorPosts(id) {
        serviceAuthors.fetchAuthorPosts(id)
            .then(posts => { this.setState({ authorPosts: posts }) });
    }

    getNewPost(id) {
        servicePost.fetchPost(id)
            .then(post => {
                this.setState({
                    post: post
                })
            });
    }

    componentDidMount() {
        this.getNewPost(this.state.singlePostId)
    }

    shouldComponentUpdate(nextProps, nextState) {
        //add new author if different from current
        if (this.state.post.userId !== nextState.post.userId) {
            this.getNewAuthor(nextState.post.userId)
            this.getNewAuthorPosts(nextState.post.userId);

        }

        return true;
    }

    componentWillReceiveProps(nextProps) {
        //get new ID from url
        this.getNewPost(nextProps.match.params.id);
    }

    render() {

        if (!this.state.post) {
            return <h3>Loading...</h3>
        }

        return (
            <div>
                <BackToPosts />
                <h1 className="center-align">{this.state.post.title}</h1>
                <Link to={`/authors/${this.state.post.userId}`}>{this.state.author.name}</Link>
                <p>{this.state.post.body}</p>
                <hr />
                <h3>{this.state.authorPosts.length - 1} more posts from same author</h3>
                <ul>
                    {this.state.authorPosts.map((post, index) => <RelatedPost key={index} post={post} currentPostId={this.state.post.id} />)}
                </ul>
            </div>
        )
    }
}

export { SinglePostPage }