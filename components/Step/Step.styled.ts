import { ButtonBorderStyles } from "./../Button/Button.styled";
import styled from "styled-components";

type Props = {
    isActive: boolean;
};
export const StepWrapperStyles = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
`;
export const StepNumberStyles = styled.span<Props>`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 700;
    font-size: 120px;
    line-height: 94px;
    text-align: center;
    background: ${({ theme }) => theme.textColor};
    background: -webkit-linear-gradient(
        90deg,
        ${({ theme }) => theme.bgColor} 0%,
        ${({ theme }) => theme.accentColor1} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s;
    filter: saturate(0);
    ${({ isActive }) =>
        isActive &&
        `
        filter: saturate(1);
  `}
`;
export const StepHeadingStyles = styled.h3<Props>`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    transition: all 0.3s;
    color: ${({ theme, isActive }) => (isActive ? theme.textColor : "#8A8893")};
    margin: 0 0 16px;
`;

export const StepParagraphStyles = styled.p<Props>`
    font-family: "Roobert TRIAL";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.textColor};
    margin: 0 0 32px;
    transition: all 0.3s;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
`;

export const ButtonStyles = styled<Props>(ButtonBorderStyles)`
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
`;
