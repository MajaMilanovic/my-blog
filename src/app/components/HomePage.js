import React from "react";
import { PostCard } from "./PostCard";
import { servicePost } from "../../services/ServicePost"
import { GuestPost } from "./GuestPost"
import { keepStateInData, getPostFromData } from "../../data/guestPosts";

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            postList: [],
            newPost: this.props.newPost,
            guestPost: JSON.parse(localStorage.getItem("lastState")) || {}
        }
    }

    componentDidMount() {
        servicePost.fetchPosts()
            .then((postList) => {
                this.setState({
                    postList: postList
                })
            })
        this.passStateToData();
        this.getGuestPostFromData();
        
    }


    passStateToData() {
        (Object.keys(this.state.newPost).length !== 0) ? keepStateInData(this.state.newPost) : null;
    }

   
    getGuestPostFromData() {
        if (getPostFromData()) {
            if (Object.keys(getPostFromData()).length !== 0) {
                this.setState({
                    guestPost: getPostFromData()
                })
                localStorage.setItem("lastState", JSON.stringify(getPostFromData()))
            }
        }

    }

    render() {
        return (
            <div className="row">
                <h1>POSTS</h1>
                {this.state.postList.map((post, key) => {
                    return <PostCard postData={post} key={key} />
                })
                }
                {(this.state.guestPost) && (Object.keys(this.state.guestPost).length !== 0)
                    ? <GuestPost newPost={this.state.guestPost} />
                    : ""}
            </div>
        )
    }
}

export { HomePage }