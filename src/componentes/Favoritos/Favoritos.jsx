import React, { useEffect, useState } from 'react';
import { MenuLike } from './style.js';
import CabecalhoFavoritos from '../CabecalhoFavoritos/CabecalhoFavoritos.jsx';
import Card from '../Card/Card.jsx';

function Favoritos(props){
    const [ListaLike, setLike] = useState([]);
    const [ListaDislike, setDislike] = useState([]);
    
    useEffect(() =>{
        if(props.connection._connection != null){
            if(ListaLike.length === 0){
                props.connection.listaTodos('like')
                    .then(Lista => setLike([...Lista]));
            }
            if(ListaDislike.length === 0){
                props.connection.listaTodos('dislike')
                    .then(Lista => setDislike([...Lista]));
            }}
    })

    return (
        <>
            <CabecalhoFavoritos like={true}/>
            <MenuLike>{ListaLike.map((Pet, i) => <Card key ={i} largura="200" pet={Pet} lastLike={1}/>)}</MenuLike> 
            <CabecalhoFavoritos like={false}/>
            <MenuLike>{ListaDislike.map((Pet, i) => <Card key={i} largura="200" pet={Pet} lastLike={-1}/>)}</MenuLike>    
        </>
    )
}

export default Favoritos;