import styled from "styled-components"
import { color, device } from "./utils/styleConstants"

export const BtnClipboard = styled.button`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    font-size: 1.2rem;
    background-color: ${color.whiteFade};
    border: none;
    cursor: pointer;
    display: flex;  
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 25px;
    right: 15px;
    transition: 300ms;
    @media ${device.desktop}{
        height: 30px;
        width: 30px;
        top: 45px;        
    }
`
export const SmallAuthorship = styled.small`
    font-size: .8rem;
    font-weight: 300;
    text-align: center;
    color: ${color.whiteFade};
    position: absolute;
    bottom: 60px;
    right: 10px;
    transition: 300ms;
    @media ${device.desktop}{
        font-size: 1.2rem;
    }
`
export const FigureMemeCard = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover ${BtnClipboard}{
        background-color: ${color.blue};
    }
    &:hover ${SmallAuthorship}{
        color: ${color.white};
        text-shadow: 0 0 5px ${color.black};
    }
`
export const ImgMeme = styled.img`
    max-width: 250px;
    object-fit: cover;
    border-radius: 10px;

    @media ${device.desktop}{
        max-width: 500px;
    }
`
export const FigcaptionMeme = styled.figcaption`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    font-size: .8rem;

    @media ${device.desktop}{
        height: 50px;
    }
`
export const H2Meme = styled.h2`
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: ${color.white}; 
    cursor: pointer;   
    @media ${device.desktop}{
        font-size: 2rem;
    }
    &:hover{
        color: ${color.blue};
    }
`
export const DivModalUploadMeme = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${color.black};
    border-radius: 10px;
`
export const DivInputContainerCheckbox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    height: 50px;
    margin-bottom: 220px;
    gap: 5px;
    @media ${device.desktop}{
        grid-template-columns: repeat(8, 1fr);
        margin-bottom: 120px;
    }
`
export const LabelCheckbox = styled.label`
    display: flex;
    width: 100%;
    height: 100%;
    font-size: .8rem;
    font-weight: 500;
    color: ${color.white};
    cursor: pointer;
    transition: 300ms;
    margin-bottom: 10px;
    align-items: center;
    &:hover{
        color: ${color.blue};
    }
    @media ${device.desktop}{
        font-size: 1rem;
    }
`
export const InputCheckbox = styled.input`
    margin-right: 5px;
    cursor: pointer;
`
export const H3Checkbox = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    text-align: left;
    color: ${color.white};
    margin: 0 10px;
`
export const LabelFileMeme = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${color.black};
    background-color: ${color.white};
    border-radius: 10px;
    cursor: pointer;
    transition: 300ms;
    &:hover{
        background-color: ${color.blue};
    }
`
export const BtnCloseModal = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${color.white};
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 300ms;
    &:hover{
        color: ${color.red};
    }
`
export const DivMemesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
    @media ${device.desktop}{
        gap: 30px;
    }
`
export const BtnGoToTop = styled.button`
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${color.white};
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
    &:hover{
        background-color: ${color.blue};
    }
`
export const BtnGoLanding = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color: ${color.yellow};  
    border: none;
    margin: 10px auto;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
    &:hover{
        background-color: ${color.red};
    }
`
export const DivTagFilterBtns = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    height: 100px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
`
export const BtnTagFilter = styled.button`
    width: auto;
    padding: 0 10px;
    height: 30px;
    border-radius: 10px;
    background-color: ${color.white};
    border: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
    &:hover{
        background-color: ${color.blue};
    }
`
export const BtnTagFilterActive = styled(BtnTagFilter)`
    background-color: ${color.blue};
    &:hover{
        background-color: ${color.red};
    }
`
    

