import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Importar la funcion para obtener los posts.
import { obtenerPosts, eliminarPost } from '../../actions/postsActions';
import Listado from './Listado';

class Posts extends Component {

    // Se obtiene el método hecho en postsActions por medio de props.
    componentDidMount() {
        this.props.obtenerPosts();   
    }

    render() {
        const { posts } = this.props.posts;

        return (
            <React.Fragment>
                <h2 className="text-center my-5"> Posts</h2>

                <Listado posts={posts} />
            </React.Fragment>
        );
    }

};

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps, { obtenerPosts, eliminarPost })(Posts);