import React, { Component } from "react";
import { Link } from "react-router-dom"
import { serviceAuthor } from "../../services/ServiceAuthors"

class AuthorsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorsList: []
        }
    }

    componentDidMount() {
        serviceAuthor.fetchAuthors()
            .then((authorsList) => {
                this.setState({ authorsList: authorsList });
            })
    }


    render() {
        return (
            <div className="collection">
                <h1>AUTHORS</h1>
                {this.state.authorsList.map((author, index) => {
                    return <Link to={`/authors/${author.id}`} className="collection-item" key={index}>{author.name}</Link >
                })}
            </div>
        )
    }
}

export { AuthorsPage }