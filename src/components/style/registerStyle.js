import styled from "styled-components";
import { color, device } from "./utils/styleConstants"

export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px 20px 0;
    @media ${device.desktop}{
        width: 50%
    }
`
export const FieldsetRegister = styled.fieldset`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    border: none;
`
export const LegendRegister = styled.legend`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${color.white};
    margin-bottom: 20px;
    text-align: center;
`
export const InputRegister = styled.input`
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
`
export const InputFileRegister = styled.input`
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    display: none;
`
export const LabelFileRegister = styled.label`
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${color.blue};
    }
`
export const LabelRegister = styled.label`
    font-size: 1rem;
    font-weight: bold;
    color: ${color.white};
    margin-bottom: 5px;
    text-align: left;
`
export const DivInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    margin-bottom: 20px;
`
export const BtnSubmitRegister = styled.button`
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 0 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    background-color: ${color.white};
    color: ${color.black};
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${color.blue};
    }
    @media ${device.desktop}{
        width: 50%
    }
`
export const PErrorInput = styled.p`
    font-size: 0.8rem;
    color: ${color.red};
    margin: 5px 0;
    text-align: left;
`

