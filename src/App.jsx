import React from 'react';
import ProfileCard from './components/ProfileCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const profiles = [
    {
      name: 'Alice Johnson',
      age: 28,
      bio: 'A passionate traveler and photographer.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Bob Smith',
      age: 32,
      bio: 'Loves coding and playing chess.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Carla Gomez',
      age: 24,
      bio: 'Artist who enjoys painting nature.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'David Lee',
      age: 30,
      bio: 'Fitness enthusiast and dog lover.',
      image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
      name: 'Eva Green',
      age: 27,
      bio: 'Avid reader and aspiring novelist.',
      image: 'https://randomuser.me/api/portraits/women/12.jpg'
    }
  ];

  const appStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
    };

  return (
    <div style={appStyle}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
          image={profile.image}
        />
      ))}
    </div>
  );
}

export default App;
