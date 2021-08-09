import styled from "styled-components";
import { CardBackgroud, MegaCardBackgroud } from "./Color";

export const CardTemplate = styled.ul`
    display: flex;
    flex-direction: column;
    width: ${(props) => `${props.largura}px`};
    border-radius: 15px;
    background-color: ${CardBackgroud};
    padding: 0;
    margin: 5px;
    font-size: ${(props) => props.small ? `0.7rem` : `1rem`};
    box-shadow: 4px 4px 20px 0px rgba(0,0,0,0.5);
`
export const CardImg = styled.img`
    width: ${(props) => `${props.largura}px`};
    border-radius: 15px;
    object-fit: cover;
`
export const CardSpace = styled.div`
    margin: 1rem;
`
export const CardName = styled.li`
    display: inline-block;
    margin: 0.1rem 0.5rem;
    text-align: center;
    font-size: ${(props) => props.small ? `1rem` : `1.5rem`};
`
export const CardPropt = styled.span`
    font-weight: bold;
`
export const CardItem = styled.li`
    display: inline-block;
    margin: 0.1rem 0.5rem;
`
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
export const Barra = styled.div`
    margin-top: 2rem;
    background-image: linear-gradient(white, ${(props) => props.cor}, white);
    width: 100%;
    height: 30px;
`
export const LevantaCard = styled.div`
    position: absolute;
    transform: rotate(-30deg);
    transform-origin: -50% 100%;
    transform: ${(props) => `rotate(${props.rot}deg)`};
`
export const IconeBarra = styled.div`
    position: absolute;
    transform: rotate(-30deg);
    transform-origin: left top;
    transform: ${(props) => `rotate(${props.rot}deg)`};
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