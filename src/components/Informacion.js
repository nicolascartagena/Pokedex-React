import { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import './Informacion.css'

const Informacion = () => {
    const [info, setInfo] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            .then(response => response.json())
            .then((data) => {
                setInfo(data)
                console.log(data)
                setIsLoading(false)
            })
    }, []);

    const peso = parseFloat(info.weight)/10;
    const altura = parseFloat(info.height)/10;

    return (
        <div>
            {isLoading ?
                'Cargando...' :
                <div className="informacion">
                    <p className="nombre">{info.name.toUpperCase()}</p>
                    <img src={info.sprites.front_default} alt={info.name}/>
                    <p className="id">N.° {info.id}</p>
                    <p className="tipos">
                        {info.types.map(type => <span className={type.type.name} key={type.slot}>{type.type.name.toUpperCase()}</span> )}
                    </p>
                    <p className="datos">Altura: {altura} m</p>
                    <p className="datos">Peso: {peso} kg</p>
                    <Link to="/" >Volver</Link>
                </div>
            }
        </div>
    )
}

export default Informacion