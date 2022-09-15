import styled from "styled-components";
import { mediaQueries } from "../../styles/mediaQueries";

export const ApplyNowWrapperStyles = styled.div`
    background: ${({ theme }) => theme.bgColor};
    padding: 96px 0;
`;

export const ApplyNowContentStyles = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    ${mediaQueries.md} {
        flex-direction: row;
    }
`;
export const ApplyNowColLStyles = styled.div`
    width: 100%;
    margin: 0 0 40px;
    ${mediaQueries.md} {
        margin: 0;
        max-width: 57%;
    }
`;
export const ApplyNowColRStyles = styled.div`
    width: 100%;
    ${mediaQueries.md} {
        max-width: 40%;
    }
`;

export const ApplyNowHeadingStyles = styled.h2`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor};
    font-size: 52px;
    line-height: 56px;
    margin: 0;
    ${mediaQueries.md} {
        font-size: 88px;
        line-height: 94px;
    }
`;

export const ApplyNowParagraphStyles = styled.p`
    font-family: "Roobert TRIAL";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: ${({ theme }) => theme.textColor};
    letter-spacing: 0.5px;
    margin: 0 0 40px;
    ${mediaQueries.md} {
        font-size: 24px;
        line-height: 40px;
    }
`;
