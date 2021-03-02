import React from "react";
import Project from "../components/Project";

const styles = {
    mainbox: {
        backgroundColor: "whitesmoke",
        borderRadius: 8,
        border: "2px solid silver"
    },
    a: {
        color: "seagreen",
        fontStyle: "italic"
    }
}

function Projects() {

    return (
        <div className="container mt-5 p-3" style={styles.mainbox}>
            <h2 style={{ fontWeight: "bold" }}>Projects</h2>
            <hr />
        </div>
    )
}

export default Projects;