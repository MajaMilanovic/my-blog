import React from 'react';
import { Switch, Route } from "react-router-dom";
import { SinglePostPage } from "./SinglePostPage";
import { SingleAuthorPage } from "./SingleAuthorPage";
import { AuthorsPage } from "./AuthorsPage";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { NewPost } from "./NewPost";
import { PostDetailsPage } from './PostDetailsPage';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: {}
        }
    }

    render() {
        return (
            <div className="container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/post/:id" component={PostDetailsPage} />
                    <Route path="/author/:id" component={SingleAuthorPage} />
                    <Route path="/authors" component={AuthorsPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route path="/posts/:new" component={NewPost} />
                    {/* <Route path="/posts/:new" render={props => <NewPost createNewPost={this.createNewPost} />} /> */}
                </Switch>
            </div>
        )
    }
}
export { Main }