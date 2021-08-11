import React from 'react';
import { Link } from 'react-router-dom';
import { MenuLike, Opcao } from './style.js';

function Home(){
    return (
        <MenuLike>
            <Link to="/search"><Opcao><h2>Novos Pets</h2></Opcao></Link>
            <Link to="/favoritos"><Opcao><h2>Favoritos</h2></Opcao></Link>
        </MenuLike>
    )
}

export default Home;