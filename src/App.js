import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import store from './store';
import {Provider} from 'react-redux';

// Componentes
import NavBar from './components/layout/NavBar';
import Posts from './components/posts/Posts';
import CrearPost from './components/posts/CrearPost';
import EditarPost from './components/posts/EditarPost';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/new-post" component={CrearPost} />
          <Route exact path="/editar/:postId" component={EditarPost}/>          
        </Switch>
      </Router>
    </Provider>
  );
}



export default App;
