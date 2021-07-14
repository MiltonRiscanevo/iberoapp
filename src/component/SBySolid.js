import React, { useEffect, useState } from 'react'

const SBySolid= () => {
    const [state,setState]= useState()

    useEffect (() => {
        setState('Single responsibility principle: Asignar responsabilidades por separado de la informacio nos permite crear por separado componentes que al unirlos nos lleva a crear programas mas comprensibles')
    })
    
    return(
        <div>
            {state}
        </div>
    )
}

export default SBySolid