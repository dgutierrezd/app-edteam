import { GET_POSTS, EDIT_POST, DELETE_POST, CREATE_POST, GET_POST, POST_LOADING } from "../actions/types";

const initialState = {
    posts: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case POST_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            }
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

        default:
            return state;
    }
}