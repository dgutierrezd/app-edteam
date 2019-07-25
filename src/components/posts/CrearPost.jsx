import React from 'react';
import Formulario from '../Utils/Formulario';

// Redux
import {connect} from 'react-redux';
// Metodo en postActions para crear un nuevo post
import {crearPost} from '../../actions/postsActions';

const CrearPost = props => {
    return (
        <div>
            {/* Se llama el formulario y se le envian los props necesarios */}
            <Formulario id='' titulo="" texto="" metodo={props.crearPost} mensaje='creado' accion='Crear' />
        </div>
    );
};

export default connect(null, {crearPost})(CrearPost);