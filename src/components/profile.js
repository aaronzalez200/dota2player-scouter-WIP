import React from "react";

export default function Profile(props) {


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
                <h1 className="Player-Name">
                    {props.userData}
                </h1>
            </div> 
            <div className="recent">Recents Here</div>
            <div className="submission">Submission Here</div>
            <div className="public-matches">Public Matches</div>
            <div className="public-data1">Public Data1</div>
            <div className="public-data2">Public Data2</div>
            <div className="logo">Logo Here</div>
            <div className="esports-matches">Esports Matches</div>
            <div className="esports-data1">Esports Data1</div>
            <div className="esports-data2">Esports Data2</div>
        </div>
    )
}