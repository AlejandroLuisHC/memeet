import styled from "styled-components";
import { color, device } from "./utils/styleConstants";

export const DivProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    justify-content: start;
    width: 100%;
    height: 100%;
    padding: 20px 20px 0;
    @media ${device.desktop}{
        width: 50%
    }
`
export const PProfileData = styled.p`
    font-size: 1.2rem;
    color: ${color.white};
    margin-bottom: 5px;
    text-align: left;
`
export const SpanData = styled.span`
    font-weight: bold;
    color: ${color.yellow};
`
export const LabelUpdateImg = styled.label`
    cursor: pointer;
    display: flex;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${color.white};
    border: 1px solid ${color.white};
    border-radius: 5px;
    padding: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${color.blue};
    }
`
export const InputImg = styled.input`
    position: absolute;
    visibility: hidden;
`
export const ImgProfile = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
`

