import React, { Component } from "react";
// import NavBar from "../components/portfolio/NavBar";
// import AboutMe from "../components/portfolio/AboutMe";
import Album from "../components/portfolio/Album";

export default class Container extends Component {
    render() {
        return (
            <section className="portfolio-container">
                <Album />
                {/* <NavBar />
                <AboutMe /> */}
                {/* Projects */}
                {/* Contact Me */}
            </section>
        );
    }
}
