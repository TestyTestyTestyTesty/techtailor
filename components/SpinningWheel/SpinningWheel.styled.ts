import { mediaQueries } from "../../styles/mediaQueries";
import styled from "styled-components";

export const SpinningWheelWrapperStyles = styled.div`
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

export const SpinningWheelContentStyles = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    ${mediaQueries.md} {
        align-items: center;
        flex-direction: row;
    }
`;
export const SpinningWheelColLStyles = styled.div`
    width: 100%;
    margin: 0 0 40px;
    ${mediaQueries.md} {
        margin: 0;
        max-width: 53%;
    }
`;
export const SpinningWheelColRStyles = styled.div`
    width: 100%;
    color: white;
    position: relative;
    background: ${({ theme }) => theme.bgColor};
    &:before,
    &:after {
        position: absolute;
        right: 0;
        width: 50%;
        height: 1px;
        background: ${({ theme }) => theme.bgColorInverted};
        ${mediaQueries.md} {
            content: "";
        }
    }
    &:before {
        top: 0;
    }
    &:after {
        bottom: 0;
    }
    ${mediaQueries.md} {
        max-width: 43%;
    }
`;

export const OverlayStyles = styled.div`
    background: ${({ theme }) => theme.bgColor};
    background: linear-gradient(
        0deg,
        rgba(8, 7, 15, 1) 0%,
        rgba(8, 7, 15, 0) 50%,
        rgba(8, 7, 15, 1) 100%
    );
`;
export const SpinningWheelHeadingStyles = styled.h2`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor};
    font-size: 48px;
    line-height: 54px;
    margin: 0 0 24px;
    ${mediaQueries.md} {
        font-size: 64px;
        line-height: 70px;
    }
`;

export const SpinningWheelParagraphStyles = styled.p`
    font-family: "Roobert TRIAL";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    color: ${({ theme }) => theme.textColor};
    letter-spacing: 0.5px;
    margin: 0 0 40px;
    ${mediaQueries.md} {
        font-size: 18px;
        line-height: 28px;
    }
`;
