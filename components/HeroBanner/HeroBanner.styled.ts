import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const HeroWrapperStyles = styled.div`
    background: ${({ theme }) => theme.bgColor};
    display: flex;
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 56px 0 121px;
    ${mediaQueries.md} {
        padding: 169px 0 195px;
    }
`;

export const HeroContentStyles = styled.div`
    display: block;
`;

export const HeroHeadingStyles = styled.h1`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 56px;
    color: ${({ theme }) => theme.textColor};
    margin: 0 0 295px;
    ${mediaQueries.md} {
        margin: 0 0 16px;
        font-size: 64px;
        line-height: 70px;
        max-width: 70%;
    }
`;

export const HeroParagraphStyles = styled.p`
    font-family: "Roobert TRIAL";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.textColor};
    margin: 0 0 40px;
    ${mediaQueries.md} {
        font-size: 24px;
        line-height: 40px;
        max-width: 50%;
    }
`;

export const HeroImageWrapperStyles = styled.div`
    max-width: 630px;
    width: 100%;
    position: absolute;
    top: 20%;
    right: -110px;
    margin: auto;
    display: flex;
    align-self: center;
    max-height: 520px;
    ${mediaQueries.sm} {
        top: 0;
        bottom: 0;
    }
    ${mediaQueries.md} {
        right: -60px;
        max-height: 630px;
    }
`;
