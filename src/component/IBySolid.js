import React from 'react'

const IBySolid = () => {

    const AnimalCarnivoro = "Le gusta la carne"

    const AnimalHervivoro = "Le gusta las verduritas"


    return(
        <div>
            <h2>Este principio Interfaz Segregation nos ayuda a no depender de una sola clase <br/> sino asignar segun la dependencia la clase a usar</h2>
            <div>El Leon {AnimalCarnivoro} eso si no {AnimalHervivoro}</div>
            <div>El hipopotamo no {AnimalCarnivoro} en cambio {AnimalHervivoro}</div>
        </div>
    )
}

export default IBySolid