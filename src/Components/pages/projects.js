import React from 'react';
import TopBar from "../Topbar/topbar";
import AppCard from "../AppBox/box";
import Apps from "../../../src/theapps.json";


const Projects = () => {
    return (
        <div>
            <TopBar />
            <div className="appHolder"> {
                Apps.map(Card => (
                    <AppCard id={Card.id}
                        link={Card.url}
                        name={Card.name} />
                ))
            } 
            </div>
        </div>
    );
}

export default Projects;