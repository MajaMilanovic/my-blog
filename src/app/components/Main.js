import React from 'react';
import { Switch, Route } from "react-router-dom";
import { SinglePostPage } from "./SinglePostPage";
import { SingleAuthorPage } from "./SingleAuthorPage";
import { AuthorsPage } from "./AuthorsPage";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { NewPostPage } from "./NewPostPage";


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newPost: {}
        }
    }

    createNewPost = (post) => {
        this.setState({
            newPost: post
        })
    }


    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" render={props => <HomePage newPost={this.state.newPost} />} />
                    <Route path="/post/:id" component={SinglePostPage} />
                    <Route path="/authors/:id" component={SingleAuthorPage} />
                    <Route path="/authors" component={AuthorsPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/posts/:new" render={(props) => <NewPostPage createNewPost={this.createNewPost} />} />
                </Switch>
            </div>
        )
    }
}
export { Main }