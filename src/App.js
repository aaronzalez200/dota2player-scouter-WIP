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
  let DataEntered;
  const [enterData, setEnterData] = React.useState(242151708)

  function handleClick(event) {
    console.log('[Handle Click] About to run getProfileData function; value of enterData:', enterData)
    getProfileData(DataEntered)
    console.log("Updating state of dataEntered for API call...")
    event.target.value = ("")
  }

  function handleEnter(event) {
    if (event.key === 'Enter') {
      getProfileData(DataEntered)
      event.target.value = ("")
    }
  }

  function handleChange2(event) {
    DataEntered = (event.target.value)
    console.log(event.target.value)
  }

  function clearText() {
  }
 
  async function getProfileData(input) {
    let response = await fetch(`https://api.opendota.com/api/players/${input}`);
    let data = await response.json()
    console.log('[From Fetch] Entering conditonals; enterData:', userInput)
    if (!response.ok) {
      console.log("[From Fetch; if] Bad Response! Status:", response.status);
      console.log("[From Fetch; if] enterData entered was:", DataEntered)
      setUserInput(129050083)
      console.log("[From Fetch; if] enterData changed to treehard:", userInput)
      return;
    } else if (data.error === 'invalid account id') {
      console.log("[From Fetch; else if] invalid account id! Resetting to TreeHard", response.status)
      setUserInput(129050083)
      return;
    } else if (data.profile === undefined) {
      console.log("[From Fetch else] Must be a huge number... Resetting")
      setUserInput(129050083)
      return;
    }
    console.log('[From Fetch] data is now...', data.error)
    setUserInput(DataEntered)
    return data;
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
// Verify below...
  React.useEffect(function() {
    fetch(`https://api.opendota.com/api/players/${userInput}`)
        .then(res => res.json())
        .then(data => setDota2Data(data))
  }, [userInput]) 
// Verify Above...
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.opendota.com/api/players/${userInput}/heroes`);
      const data   = await response.json()
      setDota2DataHeroes(data.slice(0, 30));
    }
    fetchData()
    .catch(console.error);;
  }, [userInput]) 

React.useEffect(() => {
  const fetchData2 = async () => {
    const response = await fetch(`https://api.opendota.com/api/players/${userInput}/heroes?&lane_role=${userRole}`);
    const data = await response.json()
    setDota2RoleData(data.slice(0,20));
  }
  fetchData2()
  .catch(console.error);;
}, [userRole, userInput]) 

 React.useEffect(() => {
  const fetchData3 = async () => {
    const response = await fetch(`https://api.opendota.com/api/players/${userInput}/recentMatches`);
    const data = await response.json()
    setDota2RecentData(data.slice(0,30))
  }
  fetchData3()
  .catch(console.error);;
}, [userInput])

  React.useEffect(() => {
    const fetchData4 = async () => {
      const response = await fetch(`https://api.opendota.com/api/players/${userInput}/Matches?lobby_type=1`)
      const data = await response.json()  
      setDota2EsportsRecent(data.slice(0,30))
    }
    fetchData4()
    .catch(console.error);;
}, [userInput]) 

React.useEffect(() => {
   const fetchData5 = async () => {
      const response = await fetch(`https://api.opendota.com/api/players/${userInput}/heroes?lobby_type=1&lane_role=${userRole}`)
      const data = await response.json()
      setDota2EsportsRole(data.slice(0,30))
   }
   fetchData5()
   .catch(console.error);;
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
  if(dota2Data | dota2DataHeroes | dota2RoleData | dota2EsportsRole | dota2RecentData | dota2EsportsRecent === undefined) return <>loading2...</>
  
// Mapping Data Below
const matchData = dota2DataHeroes.map((item) => {
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
const heroMatchData = dota2RoleData.map((item) => {
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
const heroRecentData = dota2RecentData.map((item) => {
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
const EsportsRoleData = dota2EsportsRole.map((item) => {
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

const esportsMatchData = dota2EsportsRecent.map((item) => {
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
          DataEntered={DataEntered}
          handleChange2={handleChange2}
          handleClick={handleClick}
          onEnter={handleEnter}
          /> 
    </div>
  )
}