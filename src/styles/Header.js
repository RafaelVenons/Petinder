import styled from "styled-components";
import { cabecalho, profileName, profileConfig, NavPrincipal, NavSecundario } from "./Color";

export const Header = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 14vh;
    background-color: ${cabecalho};

    @media (max-width: 800px){
        height: auto;
        flex-direction: column;
    }
`
export const Logo = styled.img`
    max-width: 33vw;
    margin: 5px;

    @media (max-width: 800px){
        width: 90vw;
        height: calc(90vw *4/19);
        max-width: 400px;
        max-height: 84px;
        margin: 5px;
    }
`
export const ProfileDiv = styled.section`
    display: flex;
    margin: 5px;

    @media (max-width: 800px){
        display: none;
    }
`
export const ProfileImg = styled.img`
    height: 90px;
    border-radius: 50px;
`
export const ProfileMenu = styled.div`
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 10px;
`
export const ProfileName = styled.h3`
    color: ${profileName};
    margin: 0px;
`
export const ProfileConfig = styled.h4`
    color: ${profileConfig};
    margin: 0px;
`

export const NavMenu = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    margin: 5px;
    
    @media (max-width: 800px){
        flex-wrap: wrap;
    }
`

export const NavItem = styled.div`
    background-color: ${(props) => props.select ? NavPrincipal : NavSecundario};
    display: ${(props) => props.ocutar ? 'none' : 'inline'};
    padding: 7px 10px;
    border-radius: 15px;
    margin: 5px;
    text-align: center;
    font-size: 20px;
    text-decoration: none;

    @media (max-width: 800px){
        display: inline;
    }
`