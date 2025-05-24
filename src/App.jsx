import { useState } from 'react';
import languages from './languages';
import './App.css'
import DetailCard from './DetailCard';
import Button from './Button';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  
  return (
      <>
    
    <Button languages={languages}
    selectedLanguage={selectedLanguage}
    setSelectedLanguage={setSelectedLanguage}/>

    <div className="container">
      <h1>Learn Web development</h1>

                 {/* nome prop */} {/* valore prop */}
      <DetailCard selectedLanguage={selectedLanguage}/>
    </div>

  </>
  );
}

export default App;