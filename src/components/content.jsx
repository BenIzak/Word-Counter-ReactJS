import React from 'react';
import TextAreaWordCount from './WordCounter';

// Composant principal

export default function PageContent() {
  return (
    <>
      <h1>Compteur de mots</h1>
      <p>
        Entrez une phrase dans la zone de texte ci-dessous et le compteur de mots affichera le nombre
        total de mots et le nombre de mots différents.
      </p>
      <p>
        Vous pouvez également sauvegarder les statistiques de votre phrase en cliquant sur le bouton "Sauvegarder".
      </p>

      <div className="mainContainer">

          {/*  Appelle le composant "TextAreaWordCount" contenant le textarea et le compteur de mots  */}

        <TextAreaWordCount />

          {/*  Crée une div "statsHistory" pour afficher les sauvegardes  */}

        <div className='statsHistory'></div>
      </div>
    </>
  );
}
