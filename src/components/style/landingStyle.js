import styled from "styled-components"
import { color, device } from "./utils/styleConstants"

export const BtnClipboard = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    font-size: 1.2rem;
    background-color: ${color.whiteFade};
    border: none;
    cursor: pointer;
    display: flex;  
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 55px;
    right: 10px;
    transition: 300ms;
`
export const SmallAuthorship = styled.small`
    font-size: .8rem;
    font-weight: 300;
    text-align: center;
    color: ${color.whiteFade};
    position: absolute;
    bottom: 60px;
    right: 10px;

    @media ${device.desktop}{
        font-size: 1.2rem;
    }
`
export const FigureMemeCard = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 250px;
    position: relative;

    &:hover ${BtnClipboard}{
        background-color: ${color.blue};
    }
    &:hover ${SmallAuthorship}{
        color: ${color.white};
        text-shadow: 0 0 5px ${color.black};
    }

    @media ${device.desktop}{
        height: 400px;
        width: 500px;
    }
`
export const ImgMeme = styled.img`
    height: 130px;
    width: 250px;
    object-fit: cover;
    border-radius: 10px;

    @media ${device.desktop}{
        height: 300px;
        width: 500px;
    }
`
export const FigcaptionMeme = styled.figcaption`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 250px;
    font-size: .8rem;

    @media ${device.desktop}{
        height: 50px;
        width: 500px;
    }
`
export const H2Meme = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: ${color.white};
    
    @media ${device.desktop}{
        font-size: 2rem;
    }
`
