import styled from "styled-components";
import { cabecalho } from "../../styles/Color.js"

export const Header = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 14vh;
    background-color: ${cabecalho};

    @media (max-width: 900px){
        height: auto;
        flex-direction: column;
    }
`
export const Logo = styled.img`
    max-width: 33vw;
    margin: 5px;

    @media (max-width: 900px){
        width: 90vw;
        height: calc(90vw *4/19);
        max-width: 400px;
        max-height: 84px;
        margin: 5px;
    }
`