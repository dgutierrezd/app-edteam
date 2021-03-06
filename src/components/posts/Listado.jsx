import React from 'react';
import {Link} from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Importar la funcion para obtener los posts.
import { eliminarPost } from '../../actions/postsActions';

const Listado = props => {

    const {posts} = props.posts

    return (
        <div className="row justify-content-center">
                <div className="col-md-8">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Título</th>
                                <th scope="col">Texto</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                                <tr key={post.id}>
                                    <th scope="row">{post.id}</th>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>
                                        <button onClick={() => props.eliminarPost(post.id)} className="btn btn-danger btn-block ml-2">Eliminar</button>
                                        <Link to={`/editar/${post.id}`} className="btn btn-info btn-block ml-2 my-2">Editar</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    );
};

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps, { eliminarPost }) (Listado);