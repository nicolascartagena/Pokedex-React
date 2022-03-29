import Pokemon from "./Pokemon";
import { Routes, Route } from 'react-router-dom'
import Informacion from "./Informacion";
import './Contenido.css'

const Contenido = ({ pokemons, clase }) => {

    return (
        <div className="contenido">
            <Routes>
                <Route path='/' element={
                    pokemons.map(pokemon => <Pokemon key={pokemon.name} url={pokemon.url} name={pokemon.name} />)
                } />
                <Route path=':id' element={<Informacion/>} />
            </Routes>
        </div>
    )
}

export default Contenido