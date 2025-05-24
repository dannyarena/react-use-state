function DetailCard({selectedLanguage}) {
    return (
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
    );
}

export default DetailCard;