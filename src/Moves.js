import React from 'react';

function Moves({resultado}){


    const {id, name,accuracy, effect_chance, pp,types, priority, power,sprites } = resultado

    return(
        <div className="card-panel col s12 m12 l12 xl12 center">
            <br/>

            <p><b>Número:</b> {id}</p>
            <p><b>Nombre:</b> {name}</p>
            <p><b>Accuracy:</b> {accuracy}</p>
            <p><b>Effect Chance:</b> {effect_chance}</p>
            <p><b>PP:</b>{pp}</p>
            <p><b>Priority:</b>{priority}</p>
            <p><b>power:</b>{power}</p>

        </div>
    );
}

export default Moves