import styled from "styled-components"
import { profileName, profileConfig } from "../../styles/Color"

export const ProfileDiv = styled.section`
    display: flex;
    margin: 5px;

    @media (max-width: 900px){
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