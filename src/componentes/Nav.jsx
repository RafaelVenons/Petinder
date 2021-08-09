import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem, NavMenu } from '../styles/Header';

function Nav(){
    let location = useLocation();
    const [selectH, setH] = useState(true);
    const [selectU, setU] = useState(false);
    const [selectS, setS] = useState(false);
    const [selectF, setF] = useState(false);

    useEffect(() => {
        setH(location.pathname === '/');
        setU(location.pathname === '/user');
        setS(location.pathname === '/search');
        setF(location.pathname === '/favoritos');
    }, [location.pathname]);

    return(
        <NavMenu>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/" ><NavItem select={selectH}>Home</NavItem></Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/user" ><NavItem select={selectU} ocutar={true}>Perfil</NavItem></Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/search"><NavItem select={selectS}>Novos Pets</NavItem></Link>
            <Link style={{ textDecoration: 'none', color: 'black' }} to="/favoritos"><NavItem select={selectF}>Pets Favoritos</NavItem></Link>
        </NavMenu>
    )
}

export default Nav;