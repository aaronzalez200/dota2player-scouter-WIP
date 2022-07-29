import React from "react";
import OpenDota from '../images/OpenDota.png';

export default function Sources() {

    return (
    <div className='tab-info'>
        <div className='tab-text'>
            <h2 className='tab-title'> Sources </h2>
                <p className='p'>The data used for this website was fetched from OpenDota's API: <a className='open-dota' href="https://docs.opendota.com/" target="_blank" rel="noopener noreferrer">(https://docs.opendota.com/)</a>
                </p> 
            <br></br>
            <img src={OpenDota} className='Opendota-img'/>
        </div>
    </div>
    )
}