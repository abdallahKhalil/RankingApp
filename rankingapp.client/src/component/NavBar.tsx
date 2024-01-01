//import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

    return (

        <>
            <div className="navbar">
                <div className="navbar-section-container">
                    <div className="navbar-btn">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="navbar-btn">
                        <Link to="rank-movies">Ranking movies</Link>
                    </div>
                    <div className="navbar-btn">
                        <Link to="/rank-albums">Ranking albums</Link>
                    </div>
                    <div className="navbar-btn">
                        <Link to="weatherforcast">weatherforcast</Link>
                    </div>
                </div>
            </div>
        </>
    );

}
export default NavBar;