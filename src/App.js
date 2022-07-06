import React from 'react';
import Navbar from './components/navbar';
import Profile from './components/profile';

export default function App() {
  // fetching player data
  // user ID below
  // 151097735 129050083 148839639 211537238 297679279
  let steam_Id = 297679279;

  const [userInput, setUserInput] = React.useState(211537238);
  const [dota2Data, setDota2Data] = React.useState();
  // fetch player info
  React.useEffect(function() {
    fetch(`https://api.opendota.com/api/players/${userInput}`)
        .then(res => res.json())
        .then(data => setDota2Data(data))
  }, [userInput]) 
  // User Input
  const handleChange = event => {
    setUserInput(event.target.value);
  };
  const handleClick = event => {
    event.preventDefault();
    setUserInput('New value');
  };
  // getting images
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  // for loading...
  if(dota2Data === undefined) return <>loading...</>

  
  return (
    <div>
        <Navbar />
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={userInput}
        />
      <h2>Message: {userInput}</h2>
      <button onClick={handleClick}>Click</button>
        <Profile 
          image={dota2Data.profile.avatarfull} 
          userData={dota2Data.profile.personaname}
          userBadge={images[`badge-${dota2Data.rank_tier}.png`]}
          />
    </div>
  )
}