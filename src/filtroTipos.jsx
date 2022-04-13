import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [ponemonBusqueda, setBusqueda] = useState("normal");
  const [pokemon, setPokemon] = useState([]);
  const [cant, setNewCant] = useState("1");

  const option =(e)=>{

    setBusqueda(e.target.value)
  }

  const obtenerDatos = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/type/${ponemonBusqueda}`)
      const newPokemons = {
      pokeName:res.data.pokemon[0].pokemon.name,
      type:res.data.name,   
    }
    setPokemon([...pokemon, newPokemons]);
  }; 

  return (
      <div className="App">
        <h2>Buscar Pokemon por Tipo e id</h2>

        <select onChange= {option}>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="grass">Grass</option>
            <option value="ice">ICE</option>
            <option value="fighting">Figthing</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
        </select>
        
        <label>
      <input type="text" 
        value={cant}
        onChange={(e) => setNewCant(e.target.value)}
        placeholder="Introduzca el id de un Pokemon"/>
      </label>
      <button onClick={obtenerDatos} className="botonAgregar" >Agregar</button>

        <div>
            <table className="table">
                <tr>
                    <th>Pokemon</th>
                    <th>Type</th>
                </tr>
                <tr>
                    <td>
                    <ul>
                        {pokemon.map((pokemon)=>(
                        <li key={pokemon.pokeName}>{pokemon.pokeName}</li>
                        ))}
                    </ul>
                    </td>
                    <td>
                    <ul>
                    {pokemon.map((pokemon)=>(
                    <li key={pokemon.type}>{pokemon.type}</li>
                    ))}
                    </ul>
                    </td>
                </tr>
            </table>
  </div>;
      
  </div>
  )
};

export default App;