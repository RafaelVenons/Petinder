import React from 'react';
import ProfileDefault from "../assets/ProfileDefault.png"
import { ProfileDiv, ProfileImg, ProfileMenu, ProfileName, ProfileConfig } from '../styles/Header';

function Profile(){
    return (
        <ProfileDiv>
            <ProfileImg src={ProfileDefault} />
            <ProfileMenu>
                <ProfileName>Venons</ProfileName>
                <ProfileConfig>Configurações</ProfileConfig>
            </ProfileMenu>
        </ProfileDiv>
    )
}

export default Profile;