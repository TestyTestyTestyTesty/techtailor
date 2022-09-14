import styled from "styled-components";

type Props = {
    bgColor?: string;
    textColor?: string;
};
export const ButtonStyles = styled.button<Props>`
    background-color: ${(props) => (props.bgColor ? props.bgColor : "#FF3C2E")};
    color: ${(props) => (props.textColor ? props.textColor : "#FFFFFF")};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    gap: 10px;
    border: none;
    border-radius: 46px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
`;
