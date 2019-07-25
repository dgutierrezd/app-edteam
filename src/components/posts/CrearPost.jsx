import React from 'react';
import Formulario from '../Utils/Formulario';
// Redux
import {connect} from 'react-redux';
import {crearPost} from '../../actions/postsActions';

const CrearPost = props => {
    return (
        <div>
            <Formulario id='' titulo="" texto="" metodo={props.crearPost} mensaje='creado' accion='Crear' />
        </div>
    );
};

export default connect(null, {crearPost})(CrearPost);