import React from "react";

export default function About() {

    return (
        <div className="tab-info">  
            <div className='tab-text'>
                <h2 className='tab-title'> Purpose </h2>
                    <p className='p'>This website was creating for the purpose of automating the process of trying to scout out individual players
                    to figure out what heroes to ban when drafting against them in a scrim/official. In the past I would use DotaBuff to find a player's most
                    played hero across whichever role they will be playing in a match. Having a snapshot of all-time played heroes, public matches, and esports matches
                    makes this process efficient without the need of pulling up multiple tabs to achieve a similar outcome of data.
                    </p> 
                    <br></br>
                <h2 className='tab-title'> Columns Explained </h2>
                    <h3 className='tab-title2'> All-time Most Played </h3>
                    <p className='p'>Shows the player's most played heroes (top 30).
                    </p>
                    <h3 className='tab-title2'> Recent Matches </h3>
                    <p className='p'>Shows the player's most recent public matches (recent 20).
                    </p>
                    <h3 className='tab-title2'> All-time [Role] (Public) </h3>
                    <p className='p'>Shows the player's most played heroes for the selected role (top 20).
                    </p>
                    <h3 className='tab-title2'> Recent Competitve </h3>
                    <p className='p'>Shows the player's most recent esports matches (recent 30).
                    </p>
                    <h3 className='tab-title2'> All-time [Role] (Esports) </h3>
                    <p className='p'>Shows the player's most played heroes for the selected role (top 20).
                    </p>
                    <br></br>
                <h2 className='tab-title'> Disclaimer </h2>
                    <p className='p'>The all-time hero and public matches data only functions if the player does not have their public match data disabled. Esports 
                    matches can't be hidden so this data will always be present. 
                    </p>
                    <br></br>
                    <p className='p'>Because of the way data is handled with Dota 2, some matches that are heavily lost can be recorded as having misleading stats.
                    This only occurs in extreme matches and should not heavily impact the overall data for a hero's winrate.
                    </p>
                    <br></br>
                    <p className='p'>
                    Two prime examples are:
                    </p>
                    <br></br> 
                    <p className='p'>
                    Where a position 4 hero won a match but rotated a lot in the early game so their lane is considered "Roaming" so its 
                    win isn't taken into account for all-time data 
                    </p>
                    <br></br> 
                    <p className='p'>
                    Where a carry is forced to jungle early in the game but is still able to win the match. The match will record the carry's lane as
                    "jungle" and not record the win as it being a won match from the safelane.
                    </p>
            </div>
        </div>
    )
}