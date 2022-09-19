import styled from "styled-components";
type Props = {
    open: boolean;
};
export const HeaderWrapperStyles = styled.div<Props>`
    background: ${({ theme }) => theme.bgColor};
    padding: 21px 0;
    position: sticky;
    top: 0;
    width: 100%;
    height: ${({ open }) => (open ? "100vh" : "auto")};
    z-index: 2;
`;
export const HeaderInnerWrapperStyles = styled.div<Props>`
    display: flex;
    flex-direction: column;
    height: ${({ open }) => (open ? "100%" : "auto")};
`;
export const HeaderTopStyles = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;
export const HeaderBottomStyles = styled.div<Props>`
    height: ${({ open }) => (open ? "100%" : "auto")};
`;
