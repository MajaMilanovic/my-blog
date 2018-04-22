import React, { Component, Fragment } from "react"
import { BackToAuthors } from "../partials/BackToAuthors";
import { AuthorCard } from "./AuthorCard"
import { AddressCard } from "./AddressCard"
import { CompanyCard } from "./CompanyCard"
import { url } from "../../shared/constants"
import { Author } from "../../entities/Author"



class SingleAuthorPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authorData: {},
            address: {},
            company: {}
        }
    }


    componentDidMount() {
        fetch(url.authorsURL + this.props.match.params.id)
            .then(res => res.json())
            .then(response => {
                const author = new Author(response)
                this.setState({
                    authorData: author,
                    address: author.address,
                    company: author.company
                })

            })
            .catch(e => alert(e))
    }




    render() {
        return (
            <Fragment>
                <BackToAuthors/> 
                <AuthorCard data={this.state.authorData} />
                <AddressCard address={this.state.address} />
                <CompanyCard company={this.state.company} />
            </Fragment>
        )
    }
}
export { SingleAuthorPage }