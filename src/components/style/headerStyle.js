import styled from "styled-components";
import { color } from "./utils/styleConstants";

export const BtnLogin = styled.button`
    grid-column: 3;
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
export const InputSearchBar = styled.input`
    background-color: ${color.black};
    color: ${color.white};
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 5px 10px;
    transition: all 0.3s ease-in-out;
    &:focus{
        outline: none;
    }
`
export const DivSearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    grid-column: 2;
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
    grid-column: 3;
    background-color: ${color.yellow};
    color: ${color.black};
    border: none;
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








