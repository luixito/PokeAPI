import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Moves from "./Moves";
import Menu from "./Menu";
import Formulario from "./Formulario";

function Move() {

    const [move, guardarMove] = useState('');
    const [error, capturarError] = useState(false);
    const [resultado, guardarResultado] = useState({});



    if (resultado === undefined) {
        guardarResultado({});
    }

    useEffect(() => {

        if(move === '') return;

        const consultarAPI =  () => {
            const url = `https://pokeapi.co/api/v2/move/${move}/`;

            var options = {
                method: 'get',
                headers: {
                    "Acceses-Control-Request-Headers": "*",
                    "Acceses-Control-Request-Method": "*"
                },
            }

            fetch(url, options)
                .then(response => {
                    if(response.status >= 200 && response.status < 300){
                        console.log(response.status);
                        return response.json();
                    }else{

                        console.log(response.status);
                        capturarError(true);
                        console.log('no se encontró el pokémon');
                    }
                })
                .then(jsonPoke => {
                    guardarResultado(jsonPoke);
                    console.log(jsonPoke);
                });
        }

        consultarAPI();
    }, [move]);

    const datosPokemon = datosPKMN => {

        guardarMove(datosPKMN.pokemon);
        capturarError(false);
    }

    let pkmn;
    if(move === ''){
        pkmn = <h4>Busque un pokémon</h4>;

    } else if (error){
        pkmn = <h4>Resultado  no encontrado</h4>;
    }
    else{
        pkmn = <Moves resultado={resultado}/>;
    }

    return (
        <div className="App">
            <Menu/>
            <div className="container">
                <div className="row">
                    <h3>Consultar Move</h3>
                    <div className="col s12 m12 l6 xl6">
                        <Formulario
                            datosPokemon = {datosPokemon}
                        />
                    </div>
                    <div className="col s12 m12 l6 xl6">
                        {pkmn}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Move;

