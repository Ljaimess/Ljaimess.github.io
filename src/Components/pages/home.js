import React, { Component } from 'react';
import Title from "../Title/title";
import { Link } from "react-router-dom";



class Home extends Component {
    state = {
        title: "The Adventures of Laurentino",
        subtitle: "A command line quest",
        image: "../public/pics/me.png",

        portfolio: "Projects",
        about: "About",
        contact: "Contact",
        links: "Links",
        info: "im colombian",
    }
    render() {
        return (
            <div className="App">
                <Title
                    title={this.state.title}
                    subtitle={this.state.subtitle}>
                <div className="picme"></div>
                </Title>
                <div className="menu">
                    <div className="project">
                        <Link to="/projects">
                            <h3>{this.state.portfolio}</h3>
                        </Link>
                    </div>
                    <div className="about">
                        <Link to="/about">
                            <h3>{this.state.about}</h3>
                        </Link>
                    </div>
                    <div className="contact">
                        <Link to="/contact">
                            <h3>{this.state.contact}</h3>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to="/link">
                            <h3>{this.state.links}</h3>
                        </Link>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Home;