import React from 'react';
import hero from '../../assets/hero.jpg';

const Header = () => {
    
    return (
        <header className="header">
            <div>
                <img src={hero} alt="pizza with fridge friend" />
                <h1>Fridge Friend</h1>
            </div>
            <div>
                <p>An interactive MERN SPA project that allows users find a recipe. Users are able to sign up and create an account and find a recipe by ingredient and then favorite recipes and view them.</p>
            </div>
        </header>
    )
}

export default Header;