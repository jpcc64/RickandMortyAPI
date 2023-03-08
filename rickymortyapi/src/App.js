import "./App.css";
import imgRickyMorty from "./img/rick-morty.png";
import { useState } from "react";
import Character from "./components/Character";
import Clock from "./components/Clock";
function App() {
  const [character, setCharacter] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterData = await api.json();
    setCharacter(characterData.results);
  };
  // console.log(character);

  return (
    <div className="App">
      <header className="App-header">
        <Clock></Clock>        
        <h1 className="title">Rick y Morty</h1>
        {character ? (
          <Character
            characters={character}
            setCharacter={setCharacter}
          ></Character>
        ) : (
          <>
            <img src={imgRickyMorty} alt="" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">
              Buscar personaje
            </button>
          </>
        )}
      </header>
      
    </div>
  );
}

export default App;
