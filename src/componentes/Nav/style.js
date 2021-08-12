import styled from "styled-components"
import { NavPrincipal, NavSecundario } from "../../styles/Color"

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