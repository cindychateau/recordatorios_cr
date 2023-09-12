import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Todos = () => {
    const [recordatorios, setRecordatorios] = useState([]);

    //Antes de que se monte el componente, llamamos a la API
    useEffect(() => {
        axios.get("http://localhost:8000/api/recordatorios")
            .then(res => setRecordatorios(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h1>Tus Pendientes</h1>
            <Link to="/nuevo" className='btn btn-success'>Nuevo +</Link>
            <div className='row'>
                {
                    recordatorios.map((rec, index) =>(
                        <div className='card col-3' key={index}>
                            <h2>{rec.titulo}</h2>
                            <p>{rec.contenido}</p>
                            {/* PTE: Enlace para Editar y Botón para Borrar */}
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Todos;