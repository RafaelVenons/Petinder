import styled from 'styled-components';
import ProfileDefault from '../../assets/ProfileDefault.png';

export const UsuarioImg = styled.img`
    width: 250px;
    height: 250px;
    position: relative;
    margin: 1rem;
    background-image: url(${props => props.imagem ? props.imagem : ProfileDefault});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100%;
`
export const UsuarioApresentacao = styled.div`
    display: flex;
    align-items: center;
`
export const UserName = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 250px;
`
export const Name = styled.h3`
    font-size: 3rem;
    margin: 0px;
`
export const Pq = styled.p`
    font-size: 1.5rem;
`