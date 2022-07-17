import React from "react";

export default function Navbar() {
    const [Lane, setLane] = React.useState('1');

    return (
        <nav className="Navbar">   
            <ul className="Links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sources</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="https://www.paypal.me/aaronzalez">Donate</a></li>  
            </ul>
            <h1 className="Title">
                Dota 2 Player Scouter
            </h1>
           
        </nav>
    )
}