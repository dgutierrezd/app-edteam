import {combineReducers} from 'redux';
// Importar el reducer de los posts
import postsReducer from './postsReducer';

export default combineReducers({
    posts: postsReducer
})