import React from 'react';
import TextAreaWordCount from './WordCounter';

// Composant principal

export default function PageContent() {
  return (
    <div className="mainContainer">
      <h1>Compteur de mots</h1>
      <p>
        Entrez une phrase dans la zone de texte ci-dessous et le compteur de mots affichera le nombre
        total de mots et le nombre de mots différents.
      </p>

        {/*  Appelle le composant "TextAreaWordCount" contenant le textarea et le compteur de mots  */}

      <TextAreaWordCount />

        {/*  Crée une div "statsHistory" pour afficher les sauvegardes  */}

      <div className='statsHistory'></div>
    </div>
  );
}
