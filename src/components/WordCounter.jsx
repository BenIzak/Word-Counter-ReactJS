import React, { useState, useEffect } from 'react';

import SaveButton from './SaveStats';

function TextAreaWordCount() {
  const [phrase, setPhrase] = useState('');
  const [wordArray, setWordArray] = useState([]);
  const [wordObjectArray, setWordObjectArray] = useState([]);
  const [differentWord, setDifferentWord] = useState(0);

  useEffect(() => { 

    // Définit la fonction updateWordCounts

    const updateWordCounts = () => {
        const words = phrase
        .replace(/[^\w\s',.]/gi, '') // Retire tous les caractères spéciaux et ponctuation sauf le guillemet simple, la virgule et le point
        .toLowerCase()
        .split(/[ ,.]+/) // Crée un tableau de mots en utilisant des espaces, des virgules ou des points comme séparateurs
        .filter(word => !/^'+$/.test(word)) // Retire les chaînes de caractères ne contenant que des guillemets simples
        .filter(Boolean); // Retire les chaînes de caractères vides

      const wordCounts = words.reduce((counts, word) => {  // Crée un objet contenant les mots et leur nombre d'occurrences
        counts[word] = (counts[word] || 0) + 1;
        return counts;
      }, {});

      const wordObjects = Object.entries(wordCounts).map(([word, occurrence]) => ({  // Crée un tableau d'objets contenant les mots et leur nombre d'occurrences
        name: word,
        occurrence,
      }));

      const uniqueWordObjects = Object.values(  // Crée un tableau d'objets contenant les mots et leur nombre d'occurrences sans doublons
        wordObjects.reduce((unique, wordObject) => {
          const { name, occurrence } = wordObject;
          if (unique[name]) {
            unique[name].occurrence += occurrence;
          } else {
            unique[name] = { name, occurrence };
          }
          return unique;
        }, {})
      );

      // Met à jour les différents states

      setWordArray(words); 
      setWordObjectArray(uniqueWordObjects); 
      setDifferentWord(uniqueWordObjects.length);
    };

    // Appelle la fonction updateWordCounts à chaque fois que la phrase change

    updateWordCounts();
  }, [phrase]);

  const handlePhraseChange = (event) => { // Met à jour la phrase à chaque fois que l'utilisateur tape dans le textarea
    setPhrase(event.target.value);
  };

  return (
    <>

        <div className="stats">
            <div>Nombre total de mots : {wordArray.length}</div>
            <div>Nombre de mots différents : {differentWord}</div>
        </div>

        <textarea onChange={handlePhraseChange} style={{ width: '80%' }} placeholder="Entrez une phrase ici" />
        <div className="wordCount">
            {wordObjectArray.map((wordObject, index) => (
                <span 
                key={index}
                style={{ backgroundColor: `rgba(0, 255, 0, ${wordObject.occurrence / wordArray.length})` } } 
                >
                    {wordObject.name} : {wordObject.occurrence}
                </span>
            ))}
        </div> 
        <SaveButton wordCount={wordArray.length} differentWord={differentWord} />

    </>
  );
}

export default TextAreaWordCount;
