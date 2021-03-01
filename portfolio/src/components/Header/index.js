import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="trimColor navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggley" aria-controls="toggley" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/about" className="navbar-brand">Rand Hale</Link>
                    <div className="collapse navbar-collapse" id="toggley">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;