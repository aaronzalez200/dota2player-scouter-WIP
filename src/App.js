import React from 'react';
import Navbar from './components/navbar';
import Profile from './components/profile';

export default function App() {
  // fetching player data
  const [dota2Data, setDota2Data] = React.useState()
  React.useEffect(function() {
    fetch("https://api.opendota.com/api/players/129050083")
        .then(res => res.json())
        .then(data => setDota2Data(data))
}, []) 

  if(dota2Data === undefined) return <>loading...</>

  return (
    <div>
        <Navbar />
        <Profile image={dota2Data.profile.avatarfull} userData={dota2Data.profile.personaname}/>
    </div>
  )
}