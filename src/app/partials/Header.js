import React, { Component, Fragment } from "react";
import "./partials.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        const { pathname } = this.props.location;

        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg justify-content-between">
                    <div className="container">
                        <span className="navbar-brand">My Blog</span>
                        <span className="navbar-text">
                            {(pathname === "/") ? "" : <Link to="/"><i className="material-icons">account_balance</i></Link>}
                            {(pathname === "/about") ? "" : <Link to="/about"><i className="material-icons">face</i></Link>}
                            {(pathname === "/posts/new") ? "" : <Link to="/posts/new"><i className="material-icons">create</i></Link>}
                        </span>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default withRouter(Header);