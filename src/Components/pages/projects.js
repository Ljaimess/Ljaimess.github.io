import React from 'react';
import TopBar from "../Topbar/topbar";

const items = ["hi", "hello"]

const list = () => {
    items.map(item => <div className="things"></div>)
}
 

const Projects = props => {
    return (<div>
        <TopBar/>
        {list()}
    </div>
    );
}
 
export default Projects;