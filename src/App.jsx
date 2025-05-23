import languages from './languages';

function App() {
  return (
    <div className="container">
      <h1>Learn Web development</h1>
      <div className='languages-card'>
        <h2>{languages[0].title}</h2>
        <p>{languages[0].description}</p>
      </div>
    </div>

  )
}

export default App;