import React from 'react';
import '../styles/boton.css'

function Boton({ texto, esClick, manejarClic }) {


    return (
        <>
            <button
                className={esClick ? 'btn-clic' : 'btn-reiniciar'}
                onClick={manejarClic}
            >
                {texto}
            </button>
        </>
    )

}

export default Boton