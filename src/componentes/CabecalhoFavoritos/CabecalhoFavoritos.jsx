import React from 'react';
import Like from '../../assets/okay.png'
import DisLike from '../../assets/not_ok.png'
import { Barra, IconeBarra } from './style.js';

function CabecalhoFavoritos(props){
    if(props.like){
        return <Barra cor={'#00EE00'}><IconeBarra><img src={Like} alt="Like"/></IconeBarra></Barra>;
    }else{
        return <Barra cor={'#EE0000'}><IconeBarra><img src={DisLike} alt="Like"/></IconeBarra></Barra>;
    }
}

export default CabecalhoFavoritos;