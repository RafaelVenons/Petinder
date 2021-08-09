import styled from "styled-components";
import { opcaoBackgroud } from "./Color";

export const Opcao = styled.section`
    height: 50vh;
    width: 30vw;
    border-radius: 30px;
    margin: 10px;
    background-color: ${opcaoBackgroud};
    @media (max-width: 800px){
        width: 70vw;
    }
`