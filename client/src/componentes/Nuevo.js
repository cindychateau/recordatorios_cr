import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Nuevo = () => {
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [prioridad, setPrioridad] = useState(1);

    const navigate = useNavigate();

    const [errors, setErrors] = useState({}); //errors.ATRIBUTO.message

    return (
        <div>
            <h1>Nuevo Recordatorio</h1>
            <form>
                <div>
                    <label>Título:</label>
                    <input type="text" id="titulo" value={titulo} onChange={e=>setTitulo(e.target.value)} className='form-control' />
                </div>
                <div>
                    <label>Contenido:</label>
                    <input type="text" id="contenido" value={contenido} onChange={e=>setContenido(e.target.value)} className='form-control' />
                </div>
                <div>
                    <label>Prioridad:</label>
                    <input type="number" id="prioridad" value={prioridad} onChange={e=>setPrioridad(e.target.value)} className='form-control' />
                </div>
                <input type="submit" className='btn btn-success mt-3' value="Guardar" />
            </form>
        </div>
    )


}

export default Nuevo;