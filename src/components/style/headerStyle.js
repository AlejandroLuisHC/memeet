import styled from "styled-components";
import { color, device } from "./utils/styleConstants";

export const BtnLogin = styled.button`
    background-color: ${color.yellow};
    color: ${color.black};
    border: none;
    height: 45px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 5px 10px;
    transition: 300ms;
    &:hover{
        background-color: ${color.blue};
        color: ${color.black};
    }
    @media ${device.mobile}{
        width: 100px
    }
`
export const BtnLogout = styled(BtnLogin)`
    &:hover{
        background-color: ${color.red};
        color: ${color.black};
    }
`
export const SpanLetterBlue = styled.span`
    color: ${color.blue};
`
export const SpanLetterRed = styled.span`
    color: ${color.red};
`
export const H1Header = styled.h1`
    grid-column: 1;
    font-size: 2.8rem; 
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    transition: 300ms;
    @media ${device.mobile}{
        display: none
    }
    &:hover{
        color: ${color.yellow};
        background-color: ${color.black};
    }
`

export const InputSearchBar = styled.input`
    background-color: ${color.white};
    color: ${color.black};
    border: 3px solid ${color.black};
    width: 80%;
    height: 45px;
    border-radius: 10px;
    font-size: 1.3rem;
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
    background-color: ${color.black};
    color: ${color.yellow};
    border: none;
    border-radius: 10px;
    height: 45px;
    cursor: pointer;
    font-size: 1.5rem;
    gap: 5px;
    font-weight: bold;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: ${color.blue};
        color: ${color.black};
    }
    @media ${device.desktop}{
        ::Before {
            content: "Upload";
        }
    }
    @media ${device.mobile}{
        min-width: 45px;
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
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 45px;
    gap: 50px;
    @media ${device.mobile}{
        gap: 10px;
        padding: 0 10px;
    }
`









