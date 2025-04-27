import React from 'react';


function ProfileCard({ name, age, bio, image }) {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '10px',
background: '#020024',
background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 1%, rgba(9, 9, 121, 1) 2%, rgba(0, 212, 255, 1) 97%)'
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px'
  };
  const buttonStyle = {
background: '#020024',
background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 27%, rgba(9, 9, 121, 1) 51%, rgba(0, 212, 255, 1) 94%)',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const handleSayHi = () => {
    console.log(`Hi from ${name}!`);
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>{bio}</p>
  <button onClick={handleSayHi} style={{ marginTop: '10px', padding: '8px 12px', borderRadius: '8px', background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 27%, rgba(9, 9, 121, 1) 51%, rgba(0, 212, 255, 1) 94%)', color: 'white', border: 'none', cursor: 'pointer' }}>
        Say Hi
      </button>
    </div>
  );
}

export default ProfileCard;
