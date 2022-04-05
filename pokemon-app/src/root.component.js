import React, { useEffect, useState } from "react";
import "./root.component.css";

export default function Root() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    // Gets pokemons from the server
    const getPokemons = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      // https://pokeapi.co/api/v2/pokemon/ditto
      const data = await response.json();
      setPokemons(data.results);
      console.log(data.results);
    };
    getPokemons();
  }, []);

  return (
    <div className="container2">
      <p>Pokemons</p>
      {pokemons.map(pokemon => (
          <div className="card">
            <img src='https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg' alt={pokemon.name} style="width:100%" />
              <div className="container">
                <h4><b>{pokemon.name}</b></h4>
                <p>{pokemon.description}</p>
              </div>
          </div>
        ))}     
    </div>
  );
}