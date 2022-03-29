import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Pokemon.css'

const Pokemon = ({url, name}) => {
    const [info, setInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const id = url.split('/').filter(x => x).pop()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then((data) => {
                setInfo(data)
                setIsLoading(false)
            })
    }, [])

    return (
        <div>
            {isLoading ?
                'Cargando...' :
                <div className='card'>
                    <Link to={`/${id}`} >
                        <img src={info.sprites.front_default} alt={name}/>
                        <hr/>
                        <p className="id">N.° {id}</p>
                        <p className="nombre">{name.toUpperCase()}</p>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Pokemon