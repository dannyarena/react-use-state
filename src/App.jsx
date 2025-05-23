import { useState } from 'react';
import languages from './languages';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  
  return (
      <>
    
    <div className='buttons'>  {/* contenitore per tutti i bottoni */}
      
      {/* funzione che crea un bottone per ogni linguaggio */}
      {languages.map((language) => (      
        <button 
        key={language.id} onClick={() => setSelectedLanguage(language)}>
          {language.title}
        </button>
      ))}
    </div>

    <div className="container">
      <h1>Learn Web development</h1>
      <div className='languages-card'>
        <h2>{languages[0].title}</h2>
        <p>{languages[0].description}</p>
      </div>
    </div>

  </>
  );
}

export default App;