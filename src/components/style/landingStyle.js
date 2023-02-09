import styled from "styled-components"
import { BtnSubmitRegister, LabelRegister, LegendRegister } from "./registerStyle"
import { color, device } from "./utils/styleConstants"

export const DivSpinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${color.red};
    width: 100%;
    height: 100%;
    z-index: 100;
    font-size: 15vw;

    @keyframes spin {
        0% { 
            transform: rotate(0deg);
            color: ${color.red}; 
        }
        100% { 
            transform: rotate(360deg);
            color: ${color.blue}; 
        }
    }
    animation: spin 1s linear infinite;
`

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
        top: 50px;        
    }
`
export const BtnDeleteMeme = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${color.yellow};
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 25px;
    left: 25px;
    transition: 300ms;
    &:hover{
        box-shadow: inset 0 0 10px 3px ${color.red};
    }
    @media ${device.desktop}{
        width: 30px;
        height: 30px;
    }
`
export const BtnConfirmDeleteMeme = styled(BtnDeleteMeme)`
    box-shadow: inset 0 0 10px 3px ${color.red};
    &:hover{
        background-color: ${color.red};
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
export const ImgMeme = styled.img`
    width: 350px;
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
    margin-bottom: 10px;
    color: ${color.white}; 
    cursor: pointer;   
    transition: 300ms;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
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
    background-color: ${color.yellow};
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
    color: ${color.black};
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
    color: ${color.black};
    margin: 0 10px;
`
export const LabelFileMeme = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${color.yellow};
    background-color: ${color.black};
    border-radius: 10px;
    cursor: pointer;
    transition: 300ms;
    &:hover{
        background-color: ${color.blue};
        color: ${color.black};
    }
`
export const BtnCloseModal = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.2rem;
    color: ${color.black};
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
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 45px;
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
    margin: 0 auto 45px;
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
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin: 10px auto 40px;
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
export const LabelModalMeme = styled(LabelRegister)`
    color: ${color.black};
`
export const LegendModalMeme = styled(LegendRegister)`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${color.black};
`
export const BtnSubmitMeme = styled(BtnSubmitRegister)`
    background-color: ${color.black};
    color: ${color.yellow};
    border-radius: 10px;
    &:hover{
        background-color: ${color.blue};
        color: ${color.black};
    }
`
export const FigureMemeCard = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;
    padding: 10px;
    transition: 300ms;
    &:hover ${BtnClipboard}{
        background-color: ${color.blue};
    }
    &:hover ${SmallAuthorship}{
        color: ${color.white};
        text-shadow: 0 0 5px ${color.black};
    }
    &:hover {
        transform: scale(1.2);
    }

`
