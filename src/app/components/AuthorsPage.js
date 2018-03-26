import React from "react";
import { serviceAuthors } from "../../services/ServiceAuthors";
import { AuthorCard } from "./AuthorCard";

class AuthorsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: [] }
    }

    componentDidMount() {
        serviceAuthors.fetchAuthors()
            .then(authors => this.setState({ authors }))
    }

    render() {
        return (
            <div className="collection">
                {this.state.authors.map((author, index) => <AuthorCard key={index} author={author} />)}
            </div>
        )
    }
}
export { AuthorsPage }