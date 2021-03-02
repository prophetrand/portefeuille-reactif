import React from "react";
import "./style.css"

function Footer() {
    return (
        <div id="footer" className="footer">
            <footer className="trimColor text-center text-white">
                <div className="container py-1">
                    <section className="mb-1">
                        <p>Thank you for visiting my portfolio page!</p>
                    </section>
                </div>
                <div className="justify-content-center p-1" style={{ "backgroundColor": "rgba(0, 0, 0, 0.2)" }}>
                    <div className="text-center">
                        <section className="mt-2 justify-content-center">
                            <a className="btn btn-outline-light btn-floating m-1" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/rand-hale-83ba389b/" role="button"
                            >LinkedIn</a>
                            <a className="btn btn-outline-light btn-floating m-1" target="_blank" rel="noreferrer" href="https://github.com/prophetrand" role="button"
                            >GitHub</a>
                        </section>
                        <p className="fst-italic">Designed in 2021 using React</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;