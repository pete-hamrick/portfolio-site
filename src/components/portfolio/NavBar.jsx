import React from "react";
import "./styles/NavBar.css";

function NavBar() {
    return (
        <header>
            <div className="logo">
                <h1>Pete Hamrick</h1>
            </div>
            <nav className="links">
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Resume</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                {/* about me */}
                {/* resume */}
                {/* projects */}
                {/* contact me */}
            </nav>
        </header>
    );
}

export default NavBar;
