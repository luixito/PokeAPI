import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Lista() {
    const [users, setUsers] = useState([]);
     
    const obtenerDatos = async () => {
        const res = await Axios.get('https://jsonplaceholder.typicode.com/users', {params:{anwer:42}})
        setUsers(res.data.args); // { answer: 42 }
    }
    useEffect(() => {    // Actualiza el título del documento usando la API del navegador
        document.title = 'Lista de Usuarios';
        obtenerDatos();
    });


    return (
        <div>
          <p>
          {users.map( usuario => (
                   <li key ="Usuario.id"> {usuario.name} - {usuario.username}</li>
              ))
          }
          </p>
        </div>
      );
    };

export default Lista;