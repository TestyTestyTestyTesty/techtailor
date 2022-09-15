import styled from "styled-components";

export const StepsWrapperStyles = styled.div`
    background: ${({ theme }) => theme.bgColor};
    padding: 27px 0;
`;
export const StepsTitleStyles = styled.h2`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 70px;
    margin: 0 0 16px;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
`;
export const StepsParagraphStyles = styled.h2`
    font-family: "Roobert TRIAL";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    max-width: 434px;
    margin: 0 auto 98px;
    text-align: center;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.textColor};
`;
