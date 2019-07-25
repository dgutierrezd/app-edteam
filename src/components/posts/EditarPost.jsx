import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Formulario from '../Utils/Formulario';

// Importar los posts desde el state de Redux
import { connect } from 'react-redux';
// Importar la funcion para obtener los posts.
import {editarPost, obtenerPost} from '../../actions/postsActions';

const EditarPost = props => {

    // Se usa useEffect como componentDidMount y se conoce el id que esta en la ruta
    // Y se conoce el post.
    useEffect(() => {
        const {postId} = props.match.params;
        props.obtenerPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {post, loading} = props;

    // Se verifica si en el momento hay un post, y en el momento que lo haya se llama el formulario para editarlo.
    let formulario;
    if(post === undefined || loading) {
        formulario = null;
    }   else {
        formulario = (
            // Se llama el formulario y se le envian los props necesarios 
            <Formulario id={post.id} titulo={post.title} texto={post.body} post={post} metodo={props.editarPost} mensaje='editado' accion="Editar" />
        )
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <Link to ='/' className="btn btn-secondary my-3 ml-3 float-left">
                        Volver a los Posts
                    </Link>
                </div>
            </div>
            {formulario}
        </div>
    );
};

const mapStateToProps = state => ({
    post: state.posts.post
})

export default connect(mapStateToProps, {editarPost, obtenerPost})(EditarPost);