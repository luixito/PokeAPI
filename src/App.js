import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonDatos, setPokemonDatos] = useState([]);
  const [pokemonTipos, setPokemonTipos] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonTipos(res.data.types[0].type.name);
      setPokemonDatos(toArray);
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <div className="App">
        <h2>Buscar por Nombre o id</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Introduzca el nombre de un Pokemon"
            />
          </label>
        </form>
        {pokemonDatos.map((data) => {
          return (
              <div className="container">
                <img src={data.sprites["front_default"]} />
                <div className="divTable">
                  <div className="divTableBody">
                    <div className="divTableRow">
                      <div className="divTableCell">Tipo</div>
                      <div className="divTableCell">{pokemonTipos}</div>
                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">Altura</div>
                      <div className="divTableCell">
                        {Math.round(data.height * 3.9)}"
                      </div>
                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">Peso</div>
                      <div className="divTableCell">
                        {Math.round(data.weight / 4.3)} Kg
                      </div>
                    </div>

                  </div>
                </div>
              </div>
          );
        })}
      </div>
  );
};

export default App;

