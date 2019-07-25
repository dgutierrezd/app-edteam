import axios from "axios";
import { GET_POSTS, DELETE_POST, CREATE_POST, GET_POST, POST_LOADING, EDIT_POST } from "./types";
import Swal from 'sweetalert2';

// URL de la api que se va a consumir
const url = 'https://jsonplaceholder.typicode.com/posts'

// Obtener los posts de la api
export const obtenerPosts = () => async dispatch => {
    dispatch(setPostLoading())
    await axios.get(url)
        .then(res =>
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        )
}

// Eliminar un post en especifico
export const eliminarPost = id => dispatch => {
    Swal.fire({
        title: 'Estás seguro?',
        text: "No podrás remediar esta acción",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar post',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.value) {
            axios.delete(`${url}/${id}`)
                .then(res => {
                    if (res.status === 200) {
                        dispatch({
                            type: DELETE_POST,
                            payload: id
                        })
                        Swal.fire(
                            'Eliminado!',
                            'El post ha sido eliminado.',
                            'success'
                        )
                    }
                })
                .catch(err =>
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Algo salió mal al eliminar el post.',
                    })
                )
        }
    })
}

export const crearPost = (post, id) => dispatch => {
    axios.post(url, { post })
        .then(res => {
            if (res.status === 201) {
                Swal.fire(
                    'Post Creado!',
                    'El post ha creado. Para visualizarlo ve a Redux DevTools',
                    'success'
                )
                let postId = {
                    id: res.data.id
                }
                const nuevoPost = Object.assign({}, res.data.post, postId);
                
                dispatch({
                    type: CREATE_POST,
                    payload: nuevoPost
                })
            }
        })
}

export const obtenerPost = id => dispatch => {
    dispatch(setPostLoading())
    axios.get(`${url}/${id}`)
    .then(res => {
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    })
}

export const editarPost = (postActualizado, id) => dispatch => {

    axios.put(`${url}/${id}`, {postActualizado})
        .then(res => {
            if(res.status === 200) {
                Swal.fire(
                    'Post Creado!',
                    'El post ha creado. Para visualizarlo ve a Redux DevTools',
                    'success'
                )
                
                let postId = { id: res.data.id};
                const nuevoPost = Object.assign({}, res.data.postActualizado, postId);
                console.log(nuevoPost)
                dispatch({
                    type: EDIT_POST,
                    payload: nuevoPost
                })

            }
        })
}

// Esperar a cargar los datos del post
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    };
};
