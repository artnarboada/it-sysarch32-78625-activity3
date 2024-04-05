import React from 'react';

const Pokemon = ({ id, name, type, image, base, language }) => {
  const displayName = name[language] || name.english; // Use selected language, fallback to English

  return (
    <div className="pokemon-card">
      <img src={image} alt={displayName} />
      <div className="pokemon-details">
        <h2>ID: {id}</h2>
        <h2>Name: {displayName}</h2>
        <div>Type: {type.join(', ')}</div>
        <div>HP: {base.HP}</div>
        <div>Attack: {base.Attack}</div>
        <div>Defense: {base.Defense}</div>
        <div>Sp. Attack: {base['Sp. Attack']}</div>
        <div>Sp. Defense: {base['Sp. Defense']}</div>
        <div>Speed: {base.Speed}</div>
      </div>
    </div>
  );
};

export default Pokemon;
