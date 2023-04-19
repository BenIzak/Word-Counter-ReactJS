import React, { useState } from 'react';
// import WordCountModal from './WordCountModal';

export default function SaveButton({ wordCount, differentWord }) { // récupère les données du composant WordCounter
  const [saveNumber, setSaveNumber] = useState(1);

  const handleButtonClick = () => {

    const div = document.createElement('div');
    div.className = 'savedStats';
    div.innerHTML = `<p>Sauvegarde numéro <strong>${saveNumber}</strong></p> <p>Nombre total de mots : <strong>${wordCount}</strong></p> <p>Nombre de mots différents : <strong>${differentWord}</strong></p>`;
    document.getElementsByClassName('statsHistory')[0].appendChild(div);

    setSaveNumber(saveNumber + 1); // incrémente le nombre de sauvegardes
  };


  return (
    <>
      <button onClick={handleButtonClick}>Sauvegarder</button>
    </>
  );
}
