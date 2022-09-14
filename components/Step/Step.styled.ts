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
    background: rgb(255, 60, 46, 1);
    background: -webkit-linear-gradient(
        90deg,
        rgba(9, 7, 17, 1) 0%,
        rgba(255, 60, 46, 1) 100%
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
    color: #ffffff;
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
    color: #ffffff;
    margin: 0 0 32px;
`;
