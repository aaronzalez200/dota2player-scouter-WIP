import React from "react";

export default function Navbar() {

    return (
        <nav className="Navbar">   
            <ul className="Links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sources</a></li>
                <li><a href="#">Contact</a></li>  
            </ul>
            <h1 className="Title">
                Dota &nbsp;2 &nbsp;Player &nbsp;Scouter
            </h1>
            <button className="Submit">
                --Select Role--
            </button>
        </nav>
    )
}