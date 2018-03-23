import React, { Component, Fragment } from 'react';
import './App.css';
import { HomePage } from "./components/HomePage";
import { Header } from "./partials/Header";
import { Footer } from "./partials/Footer";
import { SinglePostPage } from "./components/SinglePostPage";
import { SingleAuthorPage } from "./components/SingleAuthorPage";
import { AuthorsPage } from "./components/AuthorsPage";
import { AboutPage } from "./components/AboutPage";
import { Main } from "./components/Main"



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export { App };
