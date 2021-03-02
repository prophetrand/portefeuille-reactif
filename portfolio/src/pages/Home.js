import React from "react";

const styles = {
    h3: {
        margin: 50
    },
    a:  {
        color: "seagreen",
        fontStyle: "italic"
    }
}

function Home() {
    return (
        <div className="container mt-5">
            <h1>Welcome to my Portfolio...</h1>
            <h3 style={styles.h3} >I built this webpage using <a style={styles.a} target="_blank" rel="noreferrer" href="https://reactjs.org/">React</a> to dynamically construct the user interface with JavaScript and JSX.</h3>
            <h3 style={styles.h3} >To explore my portfolio, click the links included in the navigation bar or dropdown menu at the top of the page.</h3>
        </div>
    )
}

export default Home;