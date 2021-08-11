import React, { useEffect, useState } from 'react';
import { DestaqueCard, MenuLike, BotaoPata, EscondeMobile } from './style.js';
import Card from '../Card/Card.jsx';
import Like from '../../assets/okay.png'
import DisLike from '../../assets/not_ok.png'

function Search(props){
    const [vecDog, setVecDog] = useState([]);
    const [lastLike, setLastLike] = useState(0);
    
    function NewPet(){
        fetch(`https://api.thedogapi.com/v1/images/search`)
            .then(response => response.json())
            .then(Pets => Pets[0])
            .then(Pet => setVecDog([...vecDog, Pet]))
            .catch(erro => console.log(erro));
    }

    useEffect(() => {
        if(vecDog.length < 3){
            NewPet();
        }
    })

    function handledLike(){
        props.connection.adiciona(vecDog[vecDog.length -2], 'like');
        setLastLike(1);
        NewPet();
    }
    
    function handledDisLike(){
        props.connection.adiciona(vecDog[vecDog.length -2], 'dislike');
        setLastLike(-1);
        NewPet();
    }
    
    return(
        <>
            <DestaqueCard>
                <MenuLike>
                    <EscondeMobile><Card largura="200" key={vecDog.length -3} pet={vecDog[vecDog.length -3]}  lastLike={lastLike}/></EscondeMobile>
                    <Card largura="300" key={vecDog.length -2} pet={vecDog[vecDog.length -2]} />
                    <EscondeMobile><Card largura="200" key={vecDog.length -1} pet={vecDog[vecDog.length -1]} /></EscondeMobile>
                </MenuLike>
                <div>
                    <BotaoPata src={DisLike} alt="DisLike" onClick={handledDisLike}/><BotaoPata src={Like} alt="Like" onClick={handledLike}/>
                </div>    
            </DestaqueCard>
        </>
    )
}

export default Search;