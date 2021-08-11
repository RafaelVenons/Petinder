import styled from "styled-components";
import { opcaoBackgroud } from "../../styles/Color";

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
export const MenuLike = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem;
`