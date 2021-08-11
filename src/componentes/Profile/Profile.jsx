import React from 'react';
import ProfileDefault from "../../assets/ProfileDefault.png"
import { ProfileDiv, ProfileImg, ProfileMenu, ProfileName, ProfileConfig } from './style.js';

function Profile({nome}){
    return (
        <ProfileDiv>
            <ProfileImg src={ProfileDefault} />
            <ProfileMenu>
                <ProfileName>{nome}</ProfileName>
                <ProfileConfig>Configurações</ProfileConfig>
            </ProfileMenu>
        </ProfileDiv>
    )
}

export default Profile;