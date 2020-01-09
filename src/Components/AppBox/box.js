import React from "react";

function AppCard(props) {
    return (
        <div className="card"
            id={props.id}>
            <a href={props.link}>{props.name}</a>
        </div>

    )
}

export default AppCard