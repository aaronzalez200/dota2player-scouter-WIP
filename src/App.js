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
  // fetch player info
  React.useEffect(function() {
    fetch(`https://api.opendota.com/api/players/${userInput}`)
        .then(res => res.json())
        .then(data => setDota2Data(data))
  }, [userInput]) 
  const [dota2DataHeroes, setDota2DataHeroes] = React.useState()
  React.useEffect(function() {
    fetch(`https://api.opendota.com/api/players/${userInput}/heroes`)
        .then(res => res.json())
        .then(data => setDota2DataHeroes(data))
  }, [userInput]) 
  const [dota2RoleData, setDota2RoleData] = React.useState()
React.useEffect(function() {
  fetch(`https://api.opendota.com/api/players/${userInput}/heroes?&lane_role=${userRole}`)
      .then(res => res.json())
      .then(data => setDota2RoleData(data))
}, [userRole, userInput]) 
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
  if(dota2Data | dota2DataHeroes | dota2RoleData === undefined) return <>loading...</>
  
const Array10 = dota2DataHeroes.slice(0, 10);
const RoleArray10 = dota2RoleData.slice(0, 10);

const matchData = Array10.map((item) => {
  return (
    <div className="Match"> 
      <img
        className="hero-img" 
        src={`https://cdn.cloudflare.steamstatic.com${Heroes[item.hero_id].icon}`}
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
      />
      <p className="hero-info">
        Games: {item.kills} Wins: {item.deaths}
      </p>
    </div>
  )
}, [])


  
  return (
    <div>
        <Navbar />
        Lane: {userRole}
        <Profile 
          image={dota2Data.profile.avatarfull} 
          userData={dota2Data.profile.personaname}
          userBadge={images[`badge-${dota2Data.rank_tier}.png`]}
          handleChange={handleChange}
          HandleRoleChange={handleRoleChange}
          value={userInput}
          mostPlayed={matchData}
          roleRecent={heroMatchData}
          /> 
    </div>
  )
}