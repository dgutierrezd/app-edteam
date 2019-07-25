import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Importar la funcion para obtener los posts.
import { obtenerPosts, eliminarPost } from '../../actions/postsActions';

const Posts = props => {

    // Se obtiene el método hecho en postsActions por medio de props.
    // Y se usa el hook de useEffect como un componentDidMount()
    useEffect(() => {
        props.obtenerPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { posts } = props.posts;

    return (
        <React.Fragment>
            <h2 className="text-center my-5"> Posts</h2>

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
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps, { obtenerPosts, eliminarPost })(Posts);