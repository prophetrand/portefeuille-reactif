import React from "react";

const styles = {
    a:  {
        color: "seagreen",
        fontStyle: "italic"
    }
}

function Project(props) {
    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={props.image} alt={props.title} className="card-img-top" />
            <hr />
            <div className="card-body">
                <p className="card-text" style={{ fontWeight: "bold" }}>{props.title}</p>
                <a style={styles.a} target="_blank" rel="noreferrer" href={props.repo} >Github Repository</a><br />
                <a style={styles.a} target="_blank" rel="noreferrer" href={props.deployed} >Deployed Site</a>
            </div>
        </div>
    );
}

export default Project;