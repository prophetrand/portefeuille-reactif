import React from "react";
import "./style.css"

function Project(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} alt={props.title} className="card-img-top" />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default Project;

/* <ul>
    <li>{props.title}</li>
    <li>{props.deployed}</li>
    <li>{props.repo}</li>
    <li>{props.image}</li>
</ul> */