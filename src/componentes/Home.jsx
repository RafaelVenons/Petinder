import React from 'react';
import { Link } from 'react-router-dom';
import { MenuLike } from '../styles/CardStyle';
import { Opcao } from '../styles/HomeStyle';

function Home(){
    return (
        <MenuLike>
            <Link to="/search"><Opcao></Opcao></Link>
            <Link to="/favoritos"><Opcao></Opcao></Link>
        </MenuLike>
    )
}

export default Home;