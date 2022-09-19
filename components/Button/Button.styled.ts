import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

type Props = {
    bgColor?: string;
    textColor?: string;
};
export const ButtonStyles = styled.button<Props>`
    //background-color: ${({ bgColor }) => (bgColor ? bgColor : "#FF3C2E")};
    background: linear-gradient(268.32deg, #ff3c2e 0%, #694ef3 100%);
    color: ${({ textColor }) => (textColor ? textColor : "#FFFFFF")};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 15px;
    border: none;
    border-radius: 46px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s;
    background-size: 1px 200px;
    background-position: 1px;
    width: 100%;
    ${mediaQueries.md} {
        width: auto;
    }
    &:hover {
        background-position: 200px;
    }
`;

export const ButtonBorderStyles = styled(ButtonStyles)`
    border: 2px solid ${({ theme }) => theme.bgColorInverted};
    background: none;
`;
