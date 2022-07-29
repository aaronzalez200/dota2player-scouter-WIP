import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="Navbar">   
            <ul className="Links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Sources">Sources</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><a href="https://www.paypal.me/aaronzalez" target="_blank" rel="noopener noreferrer">Donate</a></li>  
            </ul>
            <h1 className="Title">
                Dota 2 Player Scouter
            </h1>
           
        </nav>
    )
}