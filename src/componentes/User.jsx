import React from 'react';
import ProfileDefault from "../assets/ProfileDefault.png"


import styled from 'styled-components';

let link = "https://cdn2.thedogapi.com/images/2xUswk2y8.jpg";

const Teste = styled.img`
    width: 300px;
    height: 300px;
    background-image: url(${link});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100%;
`

link = "https://cdn2.thedogapi.com/images/B1Edfl9NX_1280.jpg";

function User(){
    return (
        <div>
            <Teste />
            <div>
                <h3>Veno</h3>
                <h4>Configurações</h4>
            </div>
        </div>
    )
}

export default User;