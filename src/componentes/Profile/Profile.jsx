import React from 'react';
import { useContext } from 'react';
import InformacoesUsuario from '../../contexts/InformacoesUsuario';
import { ProfileDiv, ProfileImg, ProfileMenu, ProfileName, ProfileConfig } from './style.js';

function Profile(){
    const infoUser = useContext(InformacoesUsuario);
    return (
        <ProfileDiv>
            <ProfileImg src={infoUser.URLUser} />
            <ProfileMenu>
                <ProfileName>{infoUser.nome}</ProfileName>
                <ProfileConfig>Configurações</ProfileConfig>
            </ProfileMenu>
        </ProfileDiv>
    )
}

export default Profile;