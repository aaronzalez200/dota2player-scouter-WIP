import React from 'react';
import Navbar from './components/navbar';
import Profile from './components/profile';

export default function App() {
  // fetching player data
  // user ID below
  // 151097735 129050083 148839639 211537238 297679279
const steam_id = 129050083

  const [dota2Data, setDota2Data] = React.useState()
  React.useEffect(function() {
    fetch(`https://api.opendota.com/api/players/${steam_id}`)
        .then(res => res.json())
        .then(data => setDota2Data(data))
}, []) 

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

  if(dota2Data === undefined) return <>loading...</>

  return (
    <div>
        <Navbar />
        <Profile 
          image={dota2Data.profile.avatarfull} 
          userData={dota2Data.profile.personaname}
          userBadge={images[`badge-${dota2Data.rank_tier}.png`]}
          />
    </div>
  )
}