import { useState } from 'react';
import languages from './languages';
import './App.css'

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  
  return (
      <>
    
    <div className='buttons'>  {/* contenitore per tutti i bottoni */}
      
      {/* funzione che crea un bottone per ogni linguaggio */}
      {languages.map((language) => (      
        <button 
        key={language.id}
        onClick={() => setSelectedLanguage(language)}
        // classe active che permette di cambiare colore al btn
        className={selectedLanguage?.id === language.id ? 'active' : ''}>
          {language.title}
        </button>
      ))}
    </div>

    <div className="container">
      <h1>Learn Web development</h1>
      <div className='languages-card'>
        
        {/* operatore ternario */}
        {selectedLanguage ? (
        <>
        <h2>{selectedLanguage.title}</h2>
        <p>{selectedLanguage.description}</p>
        </>
        ) : (
          <p>Nessun linguaggio selezionato</p>
        )}
      </div>
    </div>

  </>
  );
}

export default App;