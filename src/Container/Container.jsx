import React, { Component } from "react";
import NavBar from "../components/portfolio/NavBar";
import AboutMe from "../components/portfolio/AboutMe";

export default class Container extends Component {
    render() {
        return (
            <section className="portfolio-container">
                <NavBar />
                <AboutMe />
                {/* Projects */}
                {/* Contact Me */}
            </section>
        );
    }
}
