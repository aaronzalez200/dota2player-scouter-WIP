import React from "react";

export default function Profile(props) {

    const [Lane, setLane] = React.useState('1');

    return (
        <div className="profile-info">
            <div className="profile">
                <img 
                    className="User-Image"
                    src={props.image} 
                />
                <img 
                    className="User-Badge"
                    src={props.userBadge}
                />
                <p className="Player-Name">
                    {props.userData}
                </p>
            </div> 
            <div className="recent">
                <p className="recent-title">All-time Most Played</p>
                {props.mostPlayed}
            </div>
            <div className="submission">
                <p className="sub-description">
                    Paste steam-id:
                </p>
                <input
                    className="input-here"
                    type="text"
                    id="message"
                    name="message"
                    onChange={props.handleChange}
                    value={props.userInput}
                />
            </div>
            <div className="public-matches">
                Public Matches
            </div>
            <div className="public-data1">
                Public Data1
                {props.roleRecent}
            </div>
            <div className="public-data2">Public Data2</div>
            <div className="logo">
                <select 
                className="Submit" 
                onChange={props.HandleRoleChange}
 
            >
                    <option value="1">Safelane</option>
                    <option value="2">Mid Lane</option>   
                    <option value="3">Offlane</option>
            </select>
            </div>
            <div className="esports-matches">Esports Matches</div>
            <div className="esports-data1">Esports Data1</div>
            <div className="esports-data2">Esports Data2</div>
        </div>
    )
}