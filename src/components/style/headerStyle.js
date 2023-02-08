import styled from "styled-components";
import { color, device } from "./utils/styleConstants";

export const BtnLogin = styled.button`
    background-color: ${color.yellow};
    color: ${color.black};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 5px 10px;
    transition: 300ms;
    &:hover{
        background-color: ${color.black};
        color: ${color.yellow};
    }
    @media ${device.mobile}{
        width: 100px
    }
`
export const H1Header = styled.h1`  
    grid-column: 1;
    font-size: 2rem;
    cursor: pointer;
    transition: 200ms;

    &:hover{
        color: ${color.white};
        text-shadow: 0 0 10px ${color.black};
    }
    @media ${device.mobile}{
        display: none
    }
`

export const InputSearchBar = styled.input`
    background-color: ${color.black};
    color: ${color.white};
    border: none;
    width: 80%;
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 5px 10px;
    transition: all 0.3s ease-in-out;
    &:focus{
        outline: none;
    }
`
export const FormSearchBar = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    grid-column: 2;
    @media ${device.mobile}{
        grid-column: 1 / span 2;
    }
`
export const BtnSubmitSearchBar = styled.button`
    background-color: ${color.yellow};
    color: ${color.black};
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        background-color: ${color.black};
        color: ${color.yellow};
    }
`
export const BtnFilterDropdown = styled.button` 
    background-color: ${color.yellow};
    color: ${color.black};
    border: none;
    width: 120px;
    margin: 0 auto;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 5px 10px;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: ${color.black};
        color: ${color.yellow};
    }
`
export const BtnAddMeme = styled.button`
    background-color: ${color.yellow};
    color: ${color.black};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.8rem;
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: ${color.black};
        color: ${color.yellow};
    }
`
export const ImgUser = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: 300ms;
    &:hover{
        transform: scale(1.1);
    }    
    @media ${device.mobile}{
        width: 30px;
        height: 30px;
    }
`
export const DivLogContainer = styled.div`
    grid-column: 3;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 5px;
`









