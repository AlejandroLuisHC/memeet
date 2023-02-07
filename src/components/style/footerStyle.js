import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "./utils/styleConstants";

export const SmallFooter = styled.small`
    font-size: 0.8rem;
    color: ${color.yellow};
    text-align: center;
`
export const LinkFooterPolicy = styled(Link)`
    color: ${color.yellow};
    font-size: 0.8rem;
    text-decoration: underline;
    &:hover{
        color: ${color.white};
    }
`
