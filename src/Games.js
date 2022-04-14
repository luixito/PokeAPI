import React from 'react';

function Games({resultado}){

    const {id, name,accuracy, effect_chance, pp, priority, power } = resultado


    return(
        <div className="card-panel col s12 m12 l12 xl12 center">
            <br/>
            <p><b>Número:</b> {id}</p>
            <p><b>Nombre:</b> {name}</p>

        </div>
    );
}

export default Games;