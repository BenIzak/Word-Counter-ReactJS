import React, { useState } from 'react';

export default function SaveButton({ wordCount, differentWord, phrase }) {
  const [saveNumber, setSaveNumber] = useState(1);
  const [savedPhrases, setSavedPhrases] = useState([]);

  // Fonctions pour copier la phrase dans le presse-papier

  const handleCopyClick = (event) => {
    const copyText = event.target.dataset.clipboardText;
    navigator.clipboard.writeText(copyText);
  };

  // Fonctions pour supprimer une sauvegarde
  const handleDeleteClick = (index) => {
    const newSavedPhrases = [...savedPhrases];
    newSavedPhrases.splice(index, 1);
    setSavedPhrases(newSavedPhrases);
  };

  // Fonction pour sauvegarder les statistiques de la phrase
  const handleSaveClick = () => {
    const newPhrase = {  
      id: Date.now(),
      number: saveNumber, 
      wordCount: wordCount, 
      differentWord: differentWord, 
      phrase: phrase 
    };

    // Ajoute la nouvelle phrase dans la liste des phrases sauvegardées

    const newSavedPhrases = [...savedPhrases, newPhrase];
    setSavedPhrases(newSavedPhrases);
    setSaveNumber(saveNumber + 1);
  };

  return (
    <>
      <button onClick={handleSaveClick}>Sauvegarder les statistiques</button>

      <h2>Sauvegardes</h2>

      {/* Affiche les phrases sauvegardées */}
      
        {savedPhrases.map((phrase, index) => (

          <div key={phrase.id} className="savedPhrase">
            <p>Sauvegarde numéro <strong>{phrase.number}</strong></p>
            <p>Nombre total de mots : <strong>{phrase.wordCount}</strong></p>
            <p>Nombre de mots différents : <strong>{phrase.differentWord}</strong></p>
            <div>
            <button className="copyButton" data-clipboard-text={phrase.phrase} onClick={handleCopyClick}>Copier le texte</button>
            <button className="deleteButton" onClick={() => handleDeleteClick(index)}>Supprimer la sauvegarde</button>
            </div>
          </div>
        ))}
    </>
  );
}
