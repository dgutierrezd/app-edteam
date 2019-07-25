import { GET_POSTS, EDIT_POST, DELETE_POST, CREATE_POST, GET_POST, POST_LOADING } from "../actions/types";

// State inicial de la app
const initialState = {
    posts: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        // Mientras no hay aun un post para ver, va cargando
        case POST_LOADING:
            return {
                ...state,
                loading: true
            };
        // Se obtienen los posts de la api
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        // Se obtiene un post en especifico
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        // Para borrar un post en específico
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        // Poder crear un nuevo post
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        // Poder editar un post
        case EDIT_POST:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id ? (post = action.payload): post)
            }

        default:
            return state;
    }
}