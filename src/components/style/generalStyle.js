import styled, { createGlobalStyle } from "styled-components";
import { color, device } from "./utils/styleConstants";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body {
        height: 100vh;
        width: 100vw;
        background-color: ${color.black};
        overflow-x: hidden;
        &::-webkit-scrollbar {
            cursor: pointer;
            width: 4px;
            height: 4px;
        }
        &::-webkit-scrollbar-track {
            border-radius: 10px;
            background: ${color.red};
        }
        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            background: ${color.blue};
        }
        &::-webkit-scrollbar-thumb:hover{
            background: ${color.black};
        }
        &::-webkit-scrollbar-thumb:active{
            background: #484848;
        }
    }
`
export const DivMain = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template: 60px 1fr 30px / 1fr;
    justify-content: center;
    
    @media ${device.desktop}{
        grid-template: 80px 1fr 50px / 1fr 3fr 1fr; 
    };
`
export const HeaderStyle = styled.header`
    grid-column: 1;
    grid-row: 1;
    background-color: ${color.yellow};
    color: ${color.black};
    display: grid;
    text-align: center;
    align-items: center;    
    grid-template-columns: repeat(3, 1fr);

    @media ${device.desktop}{
        grid-column: 1 / span 3;
        grid-row: 1;
    };
`
export const MainStyle = styled.main`
    grid-column: 1;
    grid-row: 2;
    background-color: ${color.black};
    color: ${color.white};
    width: 100%;
    height: 100%;

    @media ${device.desktop}{
        grid-column: 2;
        grid-row: 2 / span 2;
    };
`
export const FooterStyle = styled.footer`
    grid-column: 1;
    grid-row: 3;
    color: ${color.black};
    display: grid;
    text-align: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);

    @media ${device.desktop}{
        grid-column: 3;
        grid-row: 3;
    };
`


