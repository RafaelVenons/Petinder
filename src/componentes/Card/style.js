import styled from "styled-components";

export const CardImg = styled.img`
    width: ${(props) => `${props.largura}px`};
    border-radius: 15px;
    object-fit: cover;
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.4);
`
export const LevantaCard = styled.div`
    position: absolute;
    transform: rotate(-30deg);
    transform-origin: -50% 100%;
    transform: ${(props) => `rotate(${props.rot}deg)`};
`
export const AreaCard = styled.button`
    border: none;
    background: none;
    margin: 0.3rem;
`
export const DialogPet = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius: 15px;
`