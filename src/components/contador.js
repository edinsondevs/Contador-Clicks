import {React} from 'react';

export const Contador = ({contador}) => {

    return (
        <div className="contenedor_display">
            <input type="text" name="numero" className="display" disabled
                value={contador}/>
        </div>
    )
}

export default Contador
