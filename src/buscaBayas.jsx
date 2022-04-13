import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [bayas, setBayas] = useState("1");
  const [datosBayas, setDatosbayas] = useState([]);

  const handleChange = (e) => {
    setBayas(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/berry/${bayas}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setDatosbayas(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(datosBayas);

  return (
      <div className="App">
        <h2>Busca Bayas 3000</h2>
        <h2>Escriba el nombre o un Id y descubra</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Introduzca el nombre de una baya"
            />
          </label>
        </form>
        {datosBayas.map((data) => {
          return (
              <div className="container">
                <div className="divTable">
                  <div className="divTableBody">
                    <div className="divTableRow">
                      <div className="divTableCell">Tipo</div>
                      <div className="divTableCell">
                          {data.flavors[0].flavor.name}
                      </div>
                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">Nombre</div>
                      <div className="divTableCell">
                        "{data.name}"
                      </div>
                    </div>
                    <div className="divTableRow">
                      <div className="divTableCell">Tamaño</div>
                      <div className="divTableCell">
                        {data.size}"
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