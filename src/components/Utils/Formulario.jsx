import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import Swal from 'sweetalert2';

const Formulario = props => {

    const [titulo, guardarTitulo] = useState(props.titulo);
    const [texto, guardarTexto] = useState(props.texto);

    const ejecutarFormulario = e => {
        e.preventDefault();

        let post = {
            titulo,
            texto
        }

        props.metodo(post, props.history)
    }

    return (
        <div className="row justify-content-center">
            <form onSubmit={ejecutarFormulario} className="col-8">
                <legend className="text-center my-5">{props.accion} Post</legend>
                <div className="form-group">
                    <label>Título del Post</label>
                    <input defaultValue={props.titulo} onChange={e => guardarTitulo(e.target.value)} type="text" className="form-control" placeholder="Titulo"/>
                </div>
                <div className="form-group">
                    <label>Texto:</label>
                    <textarea defaultValue={props.texto} onChange={e => guardarTexto(e.target.value)} className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-block btn-primary">{props.accion}</button> 
            </form>
        </div>
    );
};

export default withRouter(Formulario);