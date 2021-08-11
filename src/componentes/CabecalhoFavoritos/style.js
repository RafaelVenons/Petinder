import styled from "styled-components";

export const Barra = styled.div`
    margin-top: 2rem;
    background-image: linear-gradient(white, ${(props) => props.cor}, white);
    width: 100%;
    height: 30px;
`
export const IconeBarra = styled.div`
    position: absolute;
    transform: rotate(-30deg);
    transform-origin: left top;
    transform: ${(props) => `rotate(${props.rot}deg)`};
`