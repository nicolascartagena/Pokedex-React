import './App.css';
import { useState, useEffect } from "react";
import Header from './components/Header'
import Contenido from "./components/Contenido";

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data.results)
                setIsLoading(false)
            })
    }

    return (
        <div className="App">
            <Header />
            {isLoading ? 'Cargando...' : <Contenido pokemons={pokemons} clase='contenido' /> }
            <footer>
                <p>Proyecto Prueba desarrollado por Nicolás Cartagena</p>
                <a href="https://github.com/nicolascartagena?tab=repositories" target="_blank" rel="noopener noreferrer">Github</a>
            </footer>
        </div>

    );
}

export default App;
