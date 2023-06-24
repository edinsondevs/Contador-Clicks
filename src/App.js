import "./App.css";
import logo from "./images/tusclicks_rgb.png";
import Boton from "./components/boton";
import {useState} from "react";
import Contador from "./components/contador";

function App() {
    const [contador, setContador] = useState(0);

    const manejarClic = () => {
        setContador(contador + 1);
        console.log(contador);
    };

    const reiniciarContador = () => {
        setContador(0);
        console.log(contador);
    };

    return (
        <div className="contenedor">
            <div className="contenedor logo">
                <img src={logo}
                    alt="logo"
                    className="logo"/>
            </div>
            <div className="contenedor-principal">
                <Contador contador={contador}/>
                <div className="contenedor contador">
                    <Boton texto="Contar"
                        esClick={true}
                        manejarClic={manejarClic}/>
                    <Boton texto="Reiniciar"
                        esClick={false}
                        manejarClic={reiniciarContador}/>
                </div>
            </div>
        </div>
    );
}

export default App;
