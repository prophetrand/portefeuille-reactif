import React from "react";
import { Link } from "react-router-dom";

const styles = {
    mainbox: {
        backgroundColor: "whitesmoke",
        borderRadius: 8,
        border: "2px solid silver"
    },
    a:  {
        color: "seagreen",
        fontStyle: "italic"
    }
}

function About() {
    return (
        <div className="container mt-5 p-3" style={styles.mainbox}>
            <div>
                <h2 style={{ fontWeight: "bold" }}>About Me</h2>
                <hr />
                <p>My name is Rand Hale and I am a junior full stack web developer. I have been primarily exposed to the MERN stack and I am working daily to refine my expertise with its associated technologies. I am currently based in the San Francisco Bay Area, but I hope to move to Los Angeles within the year.</p>
                <p>A PDF download of my resume is available <Link to="/Rand_Hale_Resume.pdf" download target="_blank" style={styles.a}>here</Link>.</p>
                <div className="row justify-content-center">
                    <p className="col-md-3">Contact: <a style={styles.a} target="_blank" rel="noreferrer" href="mailto:randluca@gmail.com">randluca@gmail.com</a></p>
                    <p className="col-md-3">LinkedIn:   <a style={styles.a} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rand-hale-83ba389b/">Rand Hale</a></p>
                    <p className="col-md-3">GitHub: <a style={styles.a} target="_blank" rel="noreferrer" href="https://github.com/prophetrand">prophetrand</a></p>
                </div>
            </div>
        </div>
    )
}

export default About;