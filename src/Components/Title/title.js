import React from 'react';
import "./title.css";



const Title = props => (
    <div className="jumbotron jumbotron-fluid" >
        <div className="container" >
            <h1> {props.title} </h1>
            <h3> {props.subtitle} </h3>
            <div className="picme">
            <img src={props.image} alt="me"/>
            </div>
        </div> 
    </div>
)
            
export default Title;