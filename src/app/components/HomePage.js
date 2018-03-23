import React from "react";
import { PostCard } from "./PostCard";

class HomePage extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="row">
                <PostCard />
            </div>
        )
    }
}

export { HomePage }