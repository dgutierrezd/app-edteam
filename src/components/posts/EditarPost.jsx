import React, {useEffect, useState} from 'react';
import Formulario from '../Utils/Formulario';

// Importar los posts desde el state de Redux
import { connect } from 'react-redux';
// Importar la funcion para obtener los posts.
import {editarPost, obtenerPost} from '../../actions/postsActions';

const EditarPost = props => {

    useEffect(() => {
        const {postId} = props.match.params;
        props.obtenerPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {post, loading} = props;

    let formulario;
    if(post === undefined || loading) {
        formulario = null;
    }   else {
        formulario = (
            <Formulario titulo={post.title} texto={post.body} post={post} metodo={props.editarPost} mensaje='editado' accion="Editar" />
        )
    }

    return (
        <div>
            {formulario}
        </div>
    );
};

const mapStateToProps = state => ({
    post: state.posts.post
})

export default connect(mapStateToProps, {editarPost, obtenerPost})(EditarPost);