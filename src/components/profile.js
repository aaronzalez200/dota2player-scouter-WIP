import React from "react";

export default function Profile(props) {

    const [Lane, setLane] = React.useState('1');
    let text = "Safelane";
    if (props.role === '1') {
        text = "Safelane"
    } else if (props.role === '2') {
        text = "Mid Lane"
    } else if (props.role === '3') {
        text = "Offlane"
    }
    return (
        <div className="profile-info">
            <div className="profile">
                <img 
                    className="User-Image"
                    src={props.image}
                    alt="user image here"
                />
                <img 
                    className="User-Badge"
                    src={props.userBadge}
                    alt="user badge"
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
                    Enter User's Dota ID:
                </p>
                <input
                    className="input2"
                    id="steam-id-input"
                    type="search" 
                    placeholder="Steam Id" 
                    onChange={props.handleChange2}
                    onKeyPress={props.onEnter}
                >
                </input>
                <button 
                    className="Button"
                    id="testButton" 
                    onClick={props.handleClick}
                >
                    Enter
                </button>
            </div>
            <div className="public-matches">
                <h1>Public Matches</h1>
            </div>
            <div className="public-data1">
                <p className="pub1-title" >
                    Recent Matches 
                </p> 
                {props.recent}
            </div>
            <div className="public-data2">
                <p className="pub2-title" >
                    All-time {text} 
                </p> 
                {props.roleRecent}
            </div>
            <div className="logo">
                <select 
                className="Submit" 
                onChange={props.HandleRoleChange}
                >
                    <option value="1" className="option">Safelane</option>
                    <option value="2" className="option">Mid Lane</option>   
                    <option value="3" className="option">Offlane</option>
                </select>
            </div>
            <h1 className="esports-matches">Esports Matches</h1>
            <div className="esports-data1">
                <p className="esports-title1">
                    Recent Competitive
                </p>
                {props.esportsRecent}
                </div>
            <div className="esports-data2">
                <p className="esports-title2">
                    All-time {text}
                </p>
                {props.esportsRole}
            </div>
        </div>
    )
}