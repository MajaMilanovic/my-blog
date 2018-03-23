import React from "react";
import { Link } from "react-router-dom"

const AuthorsPage = () => {
    return (
        <div className="collection">
            <Link to="/authors/:id" className="collection-item">Name Surname</Link >
            <Link to="/authors/:id" className="collection-item active">Name Surname</Link >
            <Link to="/authors/:id" className="collection-item">Name Surname</Link >
            <Link to="/authors/:id" className="collection-item">Name Surname</Link >
        </div>
    )
}

export { AuthorsPage }