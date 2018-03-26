import React from "react"
import { BackToAuthors } from "../partials/BackToAuthors";
import { serviceAuthors } from "../../services/ServiceAuthors";

class SingleAuthorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorID: props.match.params.id,
            singleAuthor: ""
        };
    }

    componentDidMount() {
        serviceAuthors.fetchAuthor(this.state.authorID)
            .then(author => this.setState({ singleAuthor: author }))
    }

    render() {
        const map = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11322.276616522473!2d${this.state.singleAuthor.addressGeoLat}!3d${this.state.singleAuthor.addressGeoLng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1521902112484`
        return (
            <div>
                <BackToAuthors />
                <h1> Author </h1>
                <div className="col s12">
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src="https://lorempixel.com/100/100/nature/" alt="profil" />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <h3>{this.state.singleAuthor.name}</h3>
                                <p>username: {this.state.singleAuthor.username}</p>
                                <p>email: {this.state.singleAuthor.email}</p>
                                <p>phone: {this.state.singleAuthor.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <h3>Address</h3>
                                <p>street: {this.state.singleAuthor.streetAddress}</p>
                                <p>city: {this.state.singleAuthor.cityAddress}</p>
                                <p>zipcode: {this.state.singleAuthor.zipcodeAddress}</p>
                            </div>
                        </div>
                        <div className="card-image">
                            <iframe src={map} width="200" height="100" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="col s12">
                    <div className="card horizontal">
                        <div className="card-stacked">
                            <div className="card-content">
                                <h3>Company</h3>
                                <p>name: {this.state.singleAuthor.companyName}</p>
                                <p>slogan: {this.state.singleAuthor.companySlogan}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export { SingleAuthorPage }