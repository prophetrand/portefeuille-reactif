import React from "react";
import Project from "../components/Project";
import probjects from "./project-info.json";

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
        <div className="container-fluid mt-5 p-3" style={styles.mainbox}>
            <h2 style={{ fontWeight: "bold" }}>Projects</h2>
            <hr />
            {probjects.map(item => (
                <Project
                    key={item.id}
                    title={item.title}
                    deployed={item.deployed}
                    repo={item.repo}
                    image={item.image}
                />
            ))}

        </div>
    )
}

export default Projects;