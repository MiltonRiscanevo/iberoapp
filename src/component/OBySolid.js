import React from 'react'

const OBySolid = ()=> {

    let Frutas={
        Pera:200,
        Manzana:300,
        Uva:1000
    }

    return(
        <div>
            <h2>Podemos tener un objeto llamado frutas con diferentes frutas <br/> y cambiar sus precios gracias a el principio Open/Closed</h2>
            <div>{`Una Pera tiene el precio actual de ${Frutas.Pera}`}</div>
            <div>{`Una Manzana tiene el precio actual de ${Frutas.Manzana}`}</div>
            <div>{`Una Uva tiene el precio actual de ${Frutas.Uva}`}</div>
        </div>
    )
}

export default OBySolid