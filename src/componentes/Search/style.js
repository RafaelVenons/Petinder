import styled from "styled-components";
import { MegaCardBackgroud } from "../../styles/Color";

export const DestaqueCard = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: ${MegaCardBackgroud};
    margin: 2rem;
    padding: 3rem;
    border-radius: 30px;
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
export const BotaoPata = styled.img`
    width: 100px;
    height: 100px;
    transition-duration: 1s;
    &:hover{
        width: 125px;
        height: 125px;
    }
`
export const EscondeMobile = styled.div`
    @media (max-width: 950px){
        display: none;
    }
`