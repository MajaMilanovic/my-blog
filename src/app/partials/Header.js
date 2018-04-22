import React from 'react';
import { Link } from "react-router-dom"
import { HomePage } from "../components/HomePage";
import { AuthorsPage } from "../components/AuthorsPage";
import { AboutPage } from "../components/AboutPage"

const Header = () => {
    return (
        <nav className="#3949ab indigo lighten-1">
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">RND BLG</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header };