import React, { Fragment } from "react";
import { Header } from "../partials/Header";
import { Footer } from "../partials/Footer";
import { Article } from "./Article"

const AboutPage = () => {
    return (
        <Fragment>
            <div className="container">
                < Article />
                < Article />
            </div>
        </Fragment>
    )
}

export { AboutPage }