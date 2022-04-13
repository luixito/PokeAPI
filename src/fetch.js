import React, { useState, useEffect} from 'react';

function Lista() {
    const [users, setUsers] = useState([]);
     
    const obtenerDatos = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/clefairy/")
      const poke = await data.json()
      setUsers(poke)
    }

    useEffect(() => {    // Actualiza el título del documento usando la API del navegador
        document.title = 'Lista de Pokemon';
        obtenerDatos();
    });

    return (
      <div>
        <p>
        {users.map( poke => (
                 <li key ="poke.id"> {poke.moves.name} - {poke.name} -{poke.order}</li>
            ))
        }
        </p>
      </div>
    );

};
export default Lista;