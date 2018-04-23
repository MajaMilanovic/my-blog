import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import { AboutPage } from "./AboutPage";
import { FeedPage } from "./FeedPage";
import { SinglePostPage } from "./SinglePostPage";
import NewPostPage  from "./NewPostPage";

class Main extends Component {
    
    render() {
        return (
            <main className="main-container container">
                <Switch>
                    <Route path="/posts/:new" component={ NewPostPage }/>
                    <Route path="/post/:id" component={ SinglePostPage } />
                    <Route path="/about" component={ AboutPage }/>
                    <Route exact path="/" component={ FeedPage }/>
                    <Route component={ NotFoundPage }/>
                </Switch>
            </main>
        )
    }
}

export { Main };