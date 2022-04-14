import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Menu from "./Menu";
import Formulario from "./Formulario";
import Games from "./Games";

function Game() {

    const [game, guardarGame] = useState('');
    const [error, capturarError] = useState(false);
    const [resultado, guardarResultado] = useState({});


    if (resultado === undefined) {
        guardarResultado({});
    }

    useEffect(() => {

        if(game === '') return;

        const consultarAPI =  () => {

            const url = `https://pokeapi.co/api/v2/generation/${game}/`;

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
    }, [game]);


    const datosPokemon = datosPKMN => {

        guardarGame(datosPKMN.pokemon);
        capturarError(false);
    }

    let pkmn;

    if(game === ''){

        pkmn = <h4>Busque un pokémon</h4>;

    } else if (error){
        pkmn = <h4>Resultado  no encontrado</h4>;
    }
    else{
        pkmn = <Games resultado={resultado}/>;
    }

    return (
        <div >
            <Menu/>
            <div >
                <div>
                    <h3>Consultar Juego</h3>
                    <div>
                        <Formulario
                            datosPokemon = {datosPokemon}
                        />
                    </div>
                    <div >
                        {pkmn}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Game;
