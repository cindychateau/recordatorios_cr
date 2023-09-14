import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const Editar = () => {
    const {id} = useParams();

    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [prioridad, setPrioridad] = useState(1);

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/recordatorios/"+id)
            .then(res=> {
                setTitulo(res.data.titulo);
                setContenido(res.data.contenido);
                setPrioridad(res.data.prioridad);
            })
            .catch(err => console.log(err));
    }, [id])

    const actualizarRecordatorio = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/recordatorios/"+id, {
            titulo,
            contenido,
            prioridad
        })
            .then(res=> navigate("/"))
            .catch(err=> setErrors(err.response.data.errors));
    }

    return (
        <div>
            <h1>Editar Recordatorio</h1>
            <form onSubmit={actualizarRecordatorio}>
                <div>
                    <label>Título:</label>
                    <input type="text" id="titulo" value={titulo} onChange={e=>setTitulo(e.target.value)} className='form-control' />
                    {errors.titulo ? <span className="text-danger">{errors.titulo.message}</span> : null}
                </div>
                <div>
                    <label>Contenido:</label>
                    <input type="text" id="contenido" value={contenido} onChange={e=>setContenido(e.target.value)} className='form-control' />
                    {errors.contenido ? <span className="text-danger">{errors.contenido.message}</span> : null}
                </div>
                <div>
                    <label>Prioridad:</label>
                    <input type="number" id="prioridad" value={prioridad} onChange={e=>setPrioridad(e.target.value)} className='form-control' />
                    {errors.prioridad ? <span className="text-danger">{errors.prioridad.message}</span> : null}
                </div>
                <input type="submit" className='btn btn-success mt-3' value="Guardar" />
            </form>
        </div>
    )
}

export default Editar;