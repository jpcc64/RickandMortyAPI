export default function Character(props) {
  const { characters, setCharacter } = props;
  const resetCharacter = () => {
    setCharacter(null);
  };
  return (
    <div className="Characters">
      <h1>Characters</h1>
      <span className="back-home" onClick={resetCharacter}>
        Volver a home
      </span>
      <div className="container-characters">
        {characters.map((character, index) => {
          return (
            <div className="character-container" key={index}>
              <div>
                <img src={character.image} alt={character.name} />
              </div>
              <div>
                <h3>{character.name}</h3>
                <h6>
                  {character.status === "Alive" ? (
                    <>
                      <span className="alive" />
                      Alive
                    </>
                  ) : (
                    <>
                      <span className="dead" />
                      Dead
                    </>
                  )}
                </h6>
                <p>
                  <span className="text-grey">Episodios </span>
                  <span>{character.episode.length}</span>
                </p>
                <p>
                  <span className="text-grey">Especie </span>
                  <span>{character.species}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
