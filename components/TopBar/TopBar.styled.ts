import styled from "styled-components";

type Props = {
    bgColor: string;
    textColor: string;
};
export const TopBarWrapperStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(
        268.32deg,
        rgba(255, 60, 46, 0.2) 3.26%,
        rgba(105, 78, 243, 0.2) 95.89%
    );
    min-height: 40px;
    padding: 0 10px;
`;
export const TopBarParagraphStyles = styled.p`
    font-family: "Roobert TRIAL";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.textColor};
    margin: 0 16px 0 0;
`;
export const TopBarLinkStyles = styled.a`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-decoration-line: underline;
    color: ${({ theme }) => theme.textColor};
`;
