import React from 'react';
import Navbar from './components/navbar';
import Heroes from './components/heroes.json';
import Profile from './components/profile';

export default function App() {
  // fetching player data
  // user ID below
  // 151097735 129050083 148839639 211537238 297679279
  let steam_Id = 297679279;

  const [userRole, setUserRole] = React.useState(1);
  const [userInput, setUserInput] = React.useState(129050083);
  const [dota2Data, setDota2Data] = React.useState();
  const [dota2DataHeroes, setDota2DataHeroes] = React.useState()
  const [dota2RoleData, setDota2RoleData] = React.useState()
  const [dota2RecentData, setDota2RecentData] = React.useState()
  const [dota2EsportsRecent, setDota2EsportsRecent] = React.useState()
  const [dota2EsportsRole, setDota2EsportsRole] = React.useState()
  // implementing text field
  let DataEntered = 86747043;
  function handleChange2(event) {
    DataEntered = (event.target.value)
    console.log(event.target.value)
  }
 
  // fetch player info
 
  /*
          React.useEffect(async() => {
            await fetch(`https://api.opendota.com/api/players/${userInput}`)
                .then(res => res.json())
                .then(data => setDota2Data(data))
          }, [userInput]) 
  */
  //testing above...
  React.useEffect(function() {
    fetch(`https://api.opendota.com/api/players/${userInput}`)
        .then(res => res.json())
        .then(data => setDota2Data(data))
  }, [userInput]) 

  React.useEffect(function () {
    fetch(`https://api.opendota.com/api/players/${userInput}/heroes`)
        .then(res => res.json())
        .then(data => setDota2DataHeroes(data))
  }, [userInput]) 

React.useEffect(function () {
  fetch(`https://api.opendota.com/api/players/${userInput}/heroes?&lane_role=${userRole}`)
      .then(res => res.json())
      .then(data => setDota2RoleData(data))
}, [userRole, userInput]) 

 React.useEffect(function () {
 fetch(`https://api.opendota.com/api/players/${userInput}/recentMatches`)
      .then(res => res.json())
      .then(data => setDota2RecentData(data))
}, [userInput])

  React.useEffect(function() {
    fetch(`https://api.opendota.com/api/players/${userInput}/Matches?lobby_type=1`)
        .then(res => res.json())
        .then(data => setDota2EsportsRecent(data))
}, [userInput]) 

React.useEffect(function() {
   fetch(`https://api.opendota.com/api/players/${userInput}/heroes?lobby_type=1&lane_role=${userRole}`)
      .then(res => res.json())
      .then(data => setDota2EsportsRole(data))
}, [userInput, userRole]) 

  // User Input
  const handleChange = event => {
    setUserInput(event.target.value);
  };
  const handleRoleChange = event => {
    setUserRole(event.target.value);
 };
  // getting images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  // for loading...
  if(dota2Data | dota2DataHeroes | dota2RoleData === undefined) return <>loading2...</>
  
const Array10 = dota2DataHeroes.slice(0, 30);
const RoleArray10 = dota2RoleData.slice(0, 20);
const RecentArray10 = dota2RecentData.slice(0, 30);
const EsportsArray10 = dota2EsportsRecent.slice(0, 30);
const EsportsRole = dota2EsportsRole.slice(0, 30);
// Mapping Data Below
const matchData = Array10.map((item) => {
  return (
    <div className="Match"> 
      <img
        className="hero-img" 
        src={`https://cdn.cloudflare.steamstatic.com${Heroes[item.hero_id].icon}`}
        alt={Heroes[item.hero_id]}
      />
      <p className="hero-info">
        Games: {item.games} Wins: {item.win} WR: {parseFloat(100 * item.win / item.games).toFixed(1)}%
      </p>
    </div>
  )
}, [])
const heroMatchData = RoleArray10.map((item) => {
  return (
    <div className="Match"> 
      <img
        className="hero-img" 
        src={`https://cdn.cloudflare.steamstatic.com${Heroes[item.hero_id].icon}`}
        alt={Heroes[item.hero_id]}
      />
      <p className="hero-info">
        Games: {item.games} Wins: {item.wins} WR: {parseFloat(100 * item.win / item.games).toFixed(1)}%
      </p>
    </div>
  )
}, [])
const EsportsRoleData = EsportsRole.map((item) => {
  return (
    <div className="Match"> 
      <img
        className="hero-img" 
        src={`https://cdn.cloudflare.steamstatic.com${Heroes[item.hero_id].icon}`}
        alt={Heroes[item.hero_id]}
      />
      <p className="hero-info">
        Games: {item.games} Wins: {item.wins} WR: {parseFloat(100 * item.win / item.games).toFixed(1)}%
      </p>
    </div>
  )
}, [])

 const heroRecentData = RecentArray10.map((item) => {
  return (
    <div className="Match"> 
     <img
        className="hero-img" 
        src={`https://cdn.cloudflare.steamstatic.com${Heroes[item.hero_id].icon}`}
      />
      <div className="hero-info">
        KDA: {item.kills}/{item.deaths}/{item.assists}&nbsp;{item.player_slot <= 127 ? <p className="Map"> Radiant</p>: <p className="Map"> Dire</p>}
        {item.player_slot <= 127 && item.radiant_win ? <p className="Result1">Won</p> : ''}
        {item.player_slot <= 127 && !item.radiant_win ? <p className="Result2">Loss</p> : ''}
        {item.player_slot > 127 && !item.radiant_win ? <p className="Result1">Won</p> : ''}
        {item.player_slot > 127 && item.radiant_win ?  <p className="Result2">Loss</p> : ''}
      </div>
    </div>
  )
}, [])
const esportsMatchData = EsportsArray10.map((item) => {
  return (
    <div className="Match"> 
      <img
        className="hero-img" 
        src={`https://cdn.cloudflare.steamstatic.com${Heroes[item.hero_id].icon}`}
        alt={Heroes[item.hero_id]}
      />
     <div className="hero-info">
        KDA: {item.kills}/{item.deaths}/{item.assists}&nbsp;{item.player_slot <= 127 ? <p className="Map"> Radiant</p>: <p className="Map"> Dire</p>}
        {item.player_slot <= 127 && item.radiant_win ? <p className="Result1">Won</p> : ''}
        {item.player_slot <= 127 && !item.radiant_win ? <p className="Result2">Loss</p> : ''}
        {item.player_slot > 127 && !item.radiant_win ? <p className="Result1">Won</p> : ''}
        {item.player_slot > 127 && item.radiant_win ?  <p className="Result2">Loss</p> : ''}
      </div>
    </div>
  )
}, [])

  return (
    <div>
        <Navbar />
        <Profile 
          image={dota2Data.profile.avatarfull} 
          userData={dota2Data.profile.personaname}
          userBadge={images[`badge-${dota2Data.rank_tier}.png`]}
          handleChange={handleChange}
          HandleRoleChange={handleRoleChange}
          value={userInput}
          recent={heroRecentData}
          mostPlayed={matchData}
          roleRecent={heroMatchData}
          esportsRecent={esportsMatchData}
          esportsRole={EsportsRoleData}
          role={userRole}
          handleChange2={handleChange2}
          /> 
    </div>
  )
}