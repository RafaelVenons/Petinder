import React from 'react';
import { Link } from 'react-router-dom';
import LogoIMG from '../../assets/Logo.png'
import Profile from '../Profile/Profile.jsx';
import { Header, Logo } from './style.js';
import Nav from '../Nav/Nav.jsx';

function Cabecalho(){
    return(
        <Header>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/user'><Profile/></Link>
            <Link to='/'><Logo src={LogoIMG} alt="Logo"/></Link>
            <Nav/>
        </Header>
    )
}

export default Cabecalho