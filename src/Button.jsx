function Button ({languages, selectedLanguage, setSelectedLanguage}) {
    return (
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
    );
}

export default Button;