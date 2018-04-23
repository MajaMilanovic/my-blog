import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./partials/spinner.css";
import PostCard from "./PostCard";
import { postService } from "../services/PostService";
import { getNumberOfItemsFromArray } from "../shared/utils";

class FeedPage extends Component {
    constructor() {
        super();
        this.state = {
            postList: []
        }
    }

    loadPostsOnFeedPage = () => {
        postService.fetchPosts()
            .then(posts => {
                const myPosts = posts.reverse();
                const postList = getNumberOfItemsFromArray(myPosts, 10);
                this.setState({
                    postList,
                });
            });
    }

    componentDidMount() {
        this.loadPostsOnFeedPage();
    }

    render() {
        const { postList } = this.state;

        if (postList.length === 0) { return <div className="spinner"></div> }
        return (
            <Fragment>
                <div className="jumbotron" id="feed-jumboImg">
                    <h1 className="display-4">Welcome!</h1>
                    <p className="lead">{`When all is tranquil
                        Then, too, would I have you sing
                        O evening cicada!
                        But when I’m so sunk in thought
                        Do you cry endlessly!`}</p>
                    <p>{`Bush clover blooms
                        Flowering in the fields where
                        While the evening cicadas
                        Sing
                        Blows the autumn wind.`}</p>
                    <p className="lead">
                        <Link to="/about" className="btn btn-light btn-lg" role="button">About me</Link>
                    </p>
                </div>
                {/*<SearchBar/>*/}
                {postList.map(post => {
                    return <PostCard post={post} key={post.id} loadPostsOnFeedPage={this.loadPostsOnFeedPage} />
                })}
            </Fragment>

        )
    }
}

export { FeedPage };