import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h6 className="navbar-brand" >App EDTeam</h6>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/new-post'>Nuevo Post</Link>
                    </li>
                </ul>
            </div>
            </nav>
    );
};

export default NavBar;