import styled from "styled-components";

export const HeroWrapperStyles = styled.div`
    background: black;
    display: flex;
    padding: 113px 0 195px;
    position: relative;
    width: 100%;
`;

export const HeroContentStyles = styled.div`
    display: block;
    max-width: 988px;
`;

export const HeroHeadingStyles = styled.h1`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 70px;
    color: ${({ theme }) => theme.textColor};
    margin: 0 0 16px;
    max-width: 70%;
`;

export const HeroParagraphStyles = styled.p`
    font-family: "Roobert TRIAL";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.textColor};
    max-width: 50%;
    margin: 0 0 40px;
`;

export const HeroImageWrapperStyles = styled.div`
    max-width: 630px;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -60px;
    margin: auto;
    display: flex;
    align-self: center;
    max-height: 630px;
`;
