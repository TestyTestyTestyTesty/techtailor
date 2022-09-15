import styled from "styled-components";

export const StepWrapperStyles = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
`;
export const StepNumberStyles = styled.span`
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
`;
export const StepHeadingStyles = styled.h3`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    margin: 0 0 16px;
`;

export const StepParagraphStyles = styled.p`
    font-family: "Roobert TRIAL";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.textColor};
    margin: 0 0 32px;
`;
